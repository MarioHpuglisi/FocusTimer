import state from './state.js'
import * as timer from './timer.js'
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle
    ('running')

    timer.countdown()
    
}

export function stop() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay() 
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    
}

export function reset() {
    
}

export function toggleMusic() {
    state.isNoSong = document.documentElement.classList.toggle
    ('music-on')

    if(state.isNoSong) {
        sounds.florestaAudio.play()
        return
    }

    sounds.florestaAudio.pause()
}