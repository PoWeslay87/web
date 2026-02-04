// Translation App - Indonesian to Nduga (Papua)
// Author: Antigravity AI Assistant
// Date: 2026

// Global variables
let dictionary = {}
let isIndonesiaToNduga = true
let translationCount = 0

// DOM Elements
const inputText = document.getElementById('input-text')
const outputText = document.getElementById('output-text')
const translateBtn = document.getElementById('translate-btn')
const swapBtn = document.getElementById('swap-btn')
const clearBtn = document.getElementById('clear-btn')
const copyBtn = document.getElementById('copy-btn')
const langFrom = document.getElementById('lang-from')
const langTo = document.getElementById('lang-to')
const wordCountEl = document.getElementById('word-count')
const translationCountEl = document.getElementById('translation-count')
const charCountEl = document.getElementById('char-count')

// Load dictionary on page load
window.addEventListener('DOMContentLoaded', async () => {
    await loadDictionary()
    updateWordCount()
    loadTranslationCount()
})

// Load dictionary from JSON file
async function loadDictionary() {
    try {
        const response = await fetch('kamus.json')
        dictionary = await response.json()
        console.log(
            'Dictionary loaded successfully:',
            Object.keys(dictionary).length,
            'words'
        )
    } catch (error) {
        console.error('Error loading dictionary:', error)
        dictionary = getFallbackDictionary()
    }
}

// Fallback dictionary if JSON fails to load
function getFallbackDictionary() {
    return {
        // Sapaan & Kata Dasar
        halo: 'wae',
        'selamat pagi': 'onda wao',
        'selamat siang': 'lege wao',
        'selamat malam': 'kubu wao',
        'terima kasih': 'kienaa',
        'sama-sama': 'wa wa',
        ya: 'o',
        tidak: 'lak',
        baik: 'kona',
        buruk: 'mea',

        // Keluarga
        ayah: 'nombo',
        ibu: 'tia',
        anak: 'nembera',
        kakak: 'nowe',
        adik: 'nowot',
        keluarga: 'family',

        // Angka
        satu: 'biet',
        dua: 'beren',
        tiga: 'kenan',
        empat: 'mbakut',
        lima: 'mbalim',
        enam: 'mbanem',
        tujuh: 'mbatuk',
        delapan: 'mbalap',
        sembilan: 'mbasem',
        sepuluh: 'mbapuluh',

        // Alam
        gunung: 'ndobo',
        sungai: 'yi gulo',
        air: 'yi',
        api: 'kan',
        tanah: 'miril',
        langit: 'bal',
        matahari: 'molengen',
        bulan: 'sabar',
        bintang: 'sabar',

        // Hewan
        babi: 'wom',
        burung: 'towe',
        ikan: 'ikane',
        anjing: 'jege',
        kucing: 'pus',

        // Makanan
        makan: 'nagumende',
        minum: 'iyi',
        nasi: 'sabar',
        air: 'yi',
        daging: 'Aboro',

        // Kata Kerja
        pergi: 'biri',
        datang: 'loi',
        tidur: 'nenei',
        bangun: 'mi',
        duduk: 'korejio',
        berdiri: 'minioh',
        berjalan: 'bururao',
        lari: 'datagana',
        bicara: 'wene',
        dengar: 'kulio',
        lihat: 'kaio',

        // Kata Sifat
        besar: 'gulo',
        kecil: 'manik',
        panjang: 'mot',
        pendek: 'manik',
        tinggi: 'gulo',
        rendah: 'manik',
        cantik: 'kona',
        jelek: 'mea',

        // Waktu
        hari: 'ndani',
        malam: 'mbugi',
        pagi: 'mbarek',
        siang: 'ndani',
        sore: 'sore',
        besok: 'besok',
        kemarin: 'kemarin',
        sekarang: 'sekarang',

        // Tempat
        rumah: 'uma',
        kampung: 'kampung',
        hutan: 'yigi',
        jalan: 'lak',
        pasar: 'pasar',

        // Kata Tanya
        apa: 'apa',
        siapa: 'siapa',
        dimana: 'dimana',
        kapan: 'kapan',
        mengapa: 'mengapa',
        bagaimana: 'bagaimana',

        // Lain-lain
        saya: 'na',
        kamu: 'ko',
        dia: 'ni',
        kita: 'nit',
        mereka: 'nggit',
        ini: 'ne',
        itu: 'te',
        dan: 'me',
        atau: 'o',
        dengan: 'me',
        di: 'di',
        ke: 'lak',
        dari: 'mai',
    }
}

// Translate function
function translate(text, fromIndonesia = true) {
    if (!text.trim()) {
        return '<p class="text-gray-400 italic">Hasil terjemahan akan muncul di sini...</p>'
    }

    // Split text into sentences
    const sentences = text
        .toLowerCase()
        .split(/[.!?]+/)
        .filter((s) => s.trim())
    let translatedSentences = []

    sentences.forEach((sentence) => {
        let words = sentence.trim().split(/\s+/)
        let translatedWords = []

        words.forEach((word) => {
            // Remove punctuation
            const cleanWord = word.replace(/[^\w\s]/g, '')

            if (fromIndonesia) {
                // Indonesia to Nduga
                const translated = dictionary[cleanWord] || `[${cleanWord}]`
                translatedWords.push(translated)
            } else {
                // Nduga to Indonesia
                const reversed = Object.entries(dictionary).find(
                    ([key, val]) => val === cleanWord
                )
                const translated = reversed ? reversed[0] : `[${cleanWord}]`
                translatedWords.push(translated)
            }
        })

        translatedSentences.push(translatedWords.join(' '))
    })

    const result = translatedSentences.join('. ') + '.'
    return `<p class="text-gray-800 font-medium">${result}</p>`
}

// Event Listeners
translateBtn.addEventListener('click', () => {
    const text = inputText.value
    const translated = translate(text, isIndonesiaToNduga)
    outputText.innerHTML = translated

    // Increment translation count
    translationCount++
    translationCountEl.textContent = translationCount
    saveTranslationCount()

    // Add animation
    outputText.classList.add('scale-105')
    setTimeout(() => outputText.classList.remove('scale-105'), 300)
})

// Real-time translation on input
inputText.addEventListener('input', () => {
    const text = inputText.value
    const translated = translate(text, isIndonesiaToNduga)
    outputText.innerHTML = translated

    // Update character count
    if (charCountEl) {
        charCountEl.textContent = text.length + ' karakter'
    }
})

// Swap languages
swapBtn.addEventListener('click', () => {
    isIndonesiaToNduga = !isIndonesiaToNduga

    // Swap language labels
    const tempLang = langFrom.textContent
    langFrom.textContent = langTo.textContent
    langTo.textContent = tempLang

    // Re-translate if there's text
    if (inputText.value.trim()) {
        const translated = translate(inputText.value, isIndonesiaToNduga)
        outputText.innerHTML = translated
    }
})

// Clear input
clearBtn.addEventListener('click', () => {
    inputText.value = ''
    outputText.innerHTML =
        '<p class="text-slate-400 text-sm">Hasil terjemahan akan muncul di sini...</p>'

    // Reset character count
    if (charCountEl) {
        charCountEl.textContent = '0 karakter'
    }
})

// Copy to clipboard
copyBtn.addEventListener('click', async () => {
    const text = outputText.innerText

    if (text && text !== 'Hasil terjemahan akan muncul di sini...') {
        try {
            await navigator.clipboard.writeText(text)

            // Show success feedback
            const originalText = copyBtn.textContent
            copyBtn.textContent = '✓ Tersalin!'
            copyBtn.classList.add('bg-green-700')

            setTimeout(() => {
                copyBtn.textContent = originalText
                copyBtn.classList.remove('bg-green-700')
            }, 2000)
        } catch (error) {
            alert('Gagal menyalin teks')
        }
    }
})

// Update word count
function updateWordCount() {
    const count = Object.keys(dictionary).length
    wordCountEl.textContent = count
}

// Save translation count to localStorage
function saveTranslationCount() {
    localStorage.setItem('translationCount', translationCount)
}

// Load translation count from localStorage
function loadTranslationCount() {
    const saved = localStorage.getItem('translationCount')
    if (saved) {
        translationCount = parseInt(saved)
        translationCountEl.textContent = translationCount
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to translate
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        translateBtn.click()
    }

    // Ctrl/Cmd + K to clear
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        clearBtn.click()
    }

    // Ctrl/Cmd + C to copy (when output is focused)
    if (
        (e.ctrlKey || e.metaKey) &&
        e.key === 'c' &&
        document.activeElement === outputText
    ) {
        copyBtn.click()
    }
})
