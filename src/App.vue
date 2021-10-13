<template>
  <v-app>
    <v-alert v-model="error" type="error" dismissible elevation="24">Failed loading file, try other one</v-alert>
    <v-btn
      fixed
      elevation="2"
      :style="cancelButtonStyle"
      v-on:click="cancelSelection"
      fab
    >  <v-icon>mdi-cancel</v-icon></v-btn>
    <v-main>
      <v-container id="container" style="height: 100%;width: 100%" >
        <div id="content" v-html="text" v-scroll="handleScroll" ref="content" />
      </v-container>
    </v-main>
    <v-dialog
      v-model="dialog"
      width="90%"

      transition="dialog-bottom-transition"
    >
      <v-card>
<!--          <v-btn-->
<!--            fab-->
<!--            color="secondary"-->
<!--            icon-->
<!--            dark-->
<!--            @click="dialog = false"-->
<!--          >-->
<!--            <v-icon>mdi-close</v-icon>-->
<!--          </v-btn>-->
        <div v-html="dictionaryEntry" class="dictionary"/>
      </v-card>
    </v-dialog>
    <v-bottom-sheet
      inset
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          large
          fab
          absolute top right
          v-bind="attrs"
          v-on="on"
          fixed
          style="top: 10px;right: 10px;"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-sheet
        height="200px"
      >
        <v-file-input
          truncate-length="200"
          chips
          flat
          accept="text/html"
          placeholder="Choose html file"
          @change="fileChanged"
        ></v-file-input>
        <v-text-field v-model="key" placeholder="api key goes here" @change="updateApiKey" />
      </v-sheet>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick } from '@vue/composition-api'
import debounce from 'lodash.debounce'
import axios from 'axios'

function isNotDesktop () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

export default defineComponent({
  setup: () => {
    const text = ref('')
    const error = ref(false)
    const content = ref({})
    const dialog = ref(false)
    const key = ref('')
    const dictionaryEntry = ref('')
    const cancelButtonStyle = ref({ top: '0px', left: '0px', visibility: 'hidden' })
    let cancel = false
    let selection
    const fileChanged = (file) => {
      const reader = new FileReader()
      try {
        reader.readAsText(file, 'UTF-8')
      } catch (e) {
        console.log(e)
        error.value = true
      }

      reader.onload = evt => {
        text.value = evt.target.result
        window.localStorage.setItem('currentbook', evt.target.result)
      }

      reader.onerror = evt => {
        error.value = true
        console.error(evt)
      }
    }
    const handleScroll = (e) => {
      window.localStorage.setItem('scrollHeight', window.scrollY)
    }

    const cancelSelection = function () {
      cancel = true
    }
    const updateApiKey = () => window.localStorage.setItem('api-key', key.value)

    const realSelectionHandler = async function () {
      if (selection === document.getSelection().toString().trim()) { return }
      selection = document.getSelection().toString().trim().toLowerCase()
      console.log(selection)
      if (selection.startsWith('l’') || selection.startsWith('d’')) { selection = selection.substring(2) }
      if (selection.length > 0) {
        const position = document.getSelection().getRangeAt(0).getBoundingClientRect()
        cancel = false
        cancelButtonStyle.value = { top: position.top - 56 - 10 + 'px', left: position.left + 'px', visibility: 'visible' }

        const response = await axios.get('https://cors.bridged.cc/' + 'https://www.collinsdictionary.com/dictionary/french-english/' + selection, { headers: { 'x-cors-grida-api-key': key.value } })
        // const start = `</h1>`
        // const end = `<div class="cB cB-e" data-type-block="Example sentences" id="">`
        const start = '<div class="cB cB-def dictionary biling"'
        const end = '<div class=" copyright">'
        const startPosition = response.data.toString().indexOf(start)
        const endPosition = response.data.toString().lastIndexOf(end)
        const template = document.createElement('div')
        template.innerHTML = response.data.toString().substring(startPosition, endPosition)
        // template.getElementsByClassName("socialButtons")[0].remove()
        template.getElementsByClassName('title_frequency_container').forEach((elem) => {
          elem.remove()
        })
        template.getElementsByClassName('copyright').forEach(elem => elem.remove())

        dictionaryEntry.value = template.innerHTML
        template.remove()
        setTimeout(() => {
          document.getElementsByClassName('audio_play_button').forEach(function (elem) {
            elem.className = 'v-icon notranslate mdi mdi-play-circle'
            elem.addEventListener('click', () => {
              new Audio(elem.getAttribute('data-src-mp3')).play()
            })
          })
          document.getElementsByClassName('verbtable').forEach(function (elem) {
            elem.setAttribute('target', '_blank')
          })
          document.getElementsByClassName('ref').forEach(function (elem) {
            elem.setAttribute('target', '_blank')
          })
        }, 50)
        if (!cancel && dictionaryEntry.value.length > '') { dialog.value = true }
        cancelButtonStyle.value = { visibility: 'hidden' }
      }
    }
    const selectionHandler = isNotDesktop() ? realSelectionHandler : debounce(realSelectionHandler, 1000)
    document.addEventListener('selectionchange', selectionHandler)
    onMounted(() => {
      if (window.localStorage.getItem('api-key')) { key.value = window.localStorage.getItem('api-key') }
      if (window.localStorage.getItem('currentbook')) { text.value = window.localStorage.getItem('currentbook') }
      if (window.localStorage.getItem('scrollHeight')) {
        nextTick(() => window.scroll(0, window.localStorage.getItem('scrollHeight'))
        )
      }
    })
    return {
      error,
      text,
      content,
      dialog,
      key,
      updateApiKey,
      dictionaryEntry,
      cancelButtonStyle,
      cancelSelection,
      handleScroll,
      fileChanged
    }
  }
})

</script>
<style lang="scss">

.sense {
  margin-left: 0;
  margin-bottom: .5em;
  margin-top: .5em;
  .sense {
    display: block;
    margin-left: 1.5em;
    margin-bottom: .5em;
    margin-top: .5em;
 }
 .quote {
   color: #000;
   font-style: italic;
 }
  .type-translation{
    font-weight: bold;
    font-style: normal;
  }
  .cit {
    font-style: normal;
    color: lightslategray;
    font-size: 20px;
  }
}
.short_verb_table {
  display: flex;
  flex-wrap: wrap;
}
.conjugation {
  display: block;
  min-width: 320px;
  padding-bottom: 1em;
  .title {
    font-size: 1.1em;
    line-height: 2;
  }
  .infl {
    display: block;
    padding: .1em .5em;
  }
}

</style>
