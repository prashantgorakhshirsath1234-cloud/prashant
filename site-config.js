/* Sirf ye file edit karni hai (Notepad se). Baaki sab Google Sheet se aata hai. */
window.SITE_SETTINGS = {
  // Google Sheet ke 3 tabs ko "Publish to web" -> CSV karke yaha 3 links paste karo (quotes ke andar)
  sheet: {
    videos: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4CwyrdppmRIGPB4HFhhoTz7Vd5asCacdBFCckdsjUkfGIniV-wO7faZCAzua9joCPGq5SoG33WoV4/pub?gid=220801656&single=true&output=csv',   // Videos tab ka CSV link
    designs: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4CwyrdppmRIGPB4HFhhoTz7Vd5asCacdBFCckdsjUkfGIniV-wO7faZCAzua9joCPGq5SoG33WoV4/pub?gid=1662201287&single=true&output=csv',   // Designs tab ka CSV link
    site:    'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4CwyrdppmRIGPB4HFhhoTz7Vd5asCacdBFCckdsjUkfGIniV-wO7faZCAzua9joCPGq5SoG33WoV4/pub?gid=1425321576&single=true&output=csv'    // Site tab ka CSV link
  },

  // Vimeo player ka style:
  //   'native'     = Vimeo ka apna control bar (har Vimeo account me chalta hai)   <- default
  //   'custom'     = hamare apne controls, Vimeo ke hidden (Vimeo Plus/Pro/Business account chahiye)
  //   'background' = koi control nahi, silent loop clip + hamara overlay (har account me chalta hai)
  vimeoControls: 'native',

  // Contact form (messages email me aayenge). Web3Forms (web3forms.com) se free key lo:
  formEndpoint: '',   // Web3Forms ke liye: 'https://api.web3forms.com/submit'   |  Formspree ke liye: 'https://formspree.io/f/xxxxxxx'
  formKey: ''         // sirf Web3Forms ke liye: apni access key
};
