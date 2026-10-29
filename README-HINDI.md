# Portfolio (free version): Vimeo + Google Sheet + GitHub Pages

Is folder me backend nahi hai. Videos Vimeo par rehti hain, text aur project list Google Sheet se aati hai, site GitHub Pages par free me chalti hai.

## Folder me kya hai
- `index.html`  : poori website (isko edit nahi karna)
- `site-config.js`  : **sirf yahi file edit karni hai** (Sheet ke links, Vimeo style, form key)
- `sheet-template/`  : 3 CSV files, Google Sheet me import karne ke liye (Videos, Designs, Site)
- `designs/`  : apne poster/design ki images yaha daalo
- `videos/`  : sirf sample video hai (Vimeo use karoge to zarurat nahi)

## Step 1: Vimeo par video daalo
1. vimeo.com par free account banao, **New video > Upload** se apni MP4 upload karo.
2. Video ki **Settings > Privacy** me:
   - "Who can watch" = **Public** ya **Hide from Vimeo** (unlisted)
   - "Where can this be embedded" = **Anywhere** (ya sirf apna domain)
3. Video ka link copy karo, jaise `https://vimeo.com/123456789`.
   Unlisted video ka link `https://vimeo.com/123456789/abcdef1234` jaisa hota hai, wo poora paste karna.

## Step 2: Google Sheet banao (ye tumhara admin hai)
1. sheets.google.com par nayi Sheet banao. Neeche 3 tabs rakho: **Videos**, **Designs**, **Site**.
2. Har tab me `File > Import > Upload` se `sheet-template` ki matching CSV daalo (Insert new sheet / Replace current sheet chuno).
3. **Videos tab:** har row = ek video. Columns:
   `title, category, vimeo, description, software, timeline, duration, poster, show`
   - `vimeo` me Vimeo link paste karo. Thumbnail aur duration Vimeo se apne aap aa jaate hain (khaali chhod sakte ho).
   - `software` me comma lagake likho (CapCut Pro, DaVinci Resolve).
   - Video chhupani ho to `show` me `no` likho.
   - Row ka order hi site ka order hai (upar wali pehle).
4. **Designs tab:** `title, category, image, description, software, timeline, show`
   - `image` me image ka path likho, jaise `designs/poster-01.jpg` (image `designs/` folder me upload ki ho), ya koi bhi https image link.
5. **Site tab:** do column: `key` aur `value`. Value badalo to site ka text badal jaata hai (headline, About, contact email, Instagram, phone wagairah). Kai items ek saath ho to `|` laga ke likho (`Reels | Wedding Films`). Nayi line ke liye cell ke andar Alt+Enter.
   Jo key list me nahi hai usse site ko farak nahi padta.

## Step 3: Sheet ko "publish" karo aur links lo
Har tab ke liye alag:
1. Us tab par jao, `File > Share > Publish to web`.
2. Pehla dropdown me **sirf wo tab** chuno (Entire document nahi), doosre me **Comma-separated values (.csv)**.
3. **Publish** dabao aur link copy karo.
4. `site-config.js` kholo aur teeno links `videos`, `designs`, `site` me paste karo.

Dhyan: publish ki hui Sheet ka data public hota hai. Isme koi password ya private baat mat likho. Sheet me badlav site par 5-10 minute me dikhta hai.

## Step 4: Contact form (messages email me)
1. web3forms.com par apna email daalo, wo ek **access key** bhejega.
2. `site-config.js` me `formEndpoint: 'https://api.web3forms.com/submit'` aur `formKey: 'tumhari-key'` daalo.
(Formspree chaho to `formEndpoint` me unka link daalo aur `formKey` khaali chhodo.)

## Step 5: GitHub Pages par publish
1. github.com par account banao, **New repository** (naam `portfolio`, Public).
2. Is folder ki saari files/folders upload karo (`Add file > Upload files`). `index.html`, `site-config.js`, `designs`, `sheet-template` upload hone chahiye.
3. Repository me `Settings > Pages`, Source = **Deploy from a branch**, branch **main** / folder **/ (root)**, Save.
4. 1-2 minute me link mil jaata hai: `https://tumhara-username.github.io/portfolio/`.
   Apna domain ho to isi Pages screen me **Custom domain** me daalo.

## Roz ka kaam
- Naya project: video Vimeo par upload > Sheet me nayi row > done.
- Text badalna: Sheet ke Site tab me value badlo.
- Naya design: image `designs/` folder me upload karo (GitHub me) > Designs tab me row.
- Site ka look ya code mat chhuo, sirf Sheet aur `site-config.js`.

## Vimeo player ka style (`vimeoControls`, `site-config.js` me)
- `native` : Vimeo ka apna control bar (har account me chalta hai) **<- default**
- `custom` : hamare apne controls, Vimeo ke hidden. Iske liye Vimeo ka Plus/Pro/Business account chahiye. Free account me Vimeo apna bar bhi dikhata rahega.
- `background` : koi control nahi, silent loop clip, upar hamara overlay.
Ek-ek karke try karo aur jo accha lage rakho.

## Dhyan rakhne ki baatein
- Vimeo free account me upload limits hoti hain, Vimeo ki site par current limits dekh lo.
- Videos Vimeo par rehti hain. Vimeo par video delete karoge to site par bhi nahi chalegi.
- Fonts free (OFL) hain: Italiana, Cormorant Garamond, Pinyon Script, Syncopate. Commercial use theek hai.
