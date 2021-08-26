import { useState } from 'react';
import { get } from 'lodash';
import axios from 'axios';
import './App.css';

async function translate(text, target_lang) {
  return axios.post(
    'https://jrvdc3wm93.execute-api.eu-central-1.amazonaws.com/deepl-translate',
    {
      text,
      target_lang
    }
  );
}

function App() {
  const [translation, setTranslation] = useState('');
  const [targetLang, setTargetLang] = useState('DE');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseUp = async () => {
    const s = window.getSelection();
    const oRange = s.getRangeAt(0);
    const oRect = oRange.getBoundingClientRect();
    setCoords({ x: oRect.left, y: oRect.top });
    const selectedText = s.toString();
    const response = await translate(selectedText, targetLang);
    setTranslation(get(response, 'data.translations[0].text'));
  };

  const handleClickOutside = () => {
    setTranslation(null);
  };

  const handleLanguageChange = (e) => {
    setTargetLang(e.target.value);
  };

  return (
    <div className="App" onClick={handleClickOutside}>
      <header className="App-header">Babbel Deepl test</header>
      <section className="App-body">
        <div>
          <p>Target language:</p>
          <select onChange={handleLanguageChange}>
            <option value="DE" selected>
              German
            </option>
            <option value="IT">Italian</option>
            <option value="ES">Spanish</option>
            <option value="RU">Russian</option>
            <option value="FR">French</option>
          </select>
        </div>
        <p>Highlight text to see the translation</p>
        {translation && (
          <div
            className="App-tooltip"
            style={{
              top: coords.y - 35,
              left: coords.x
            }}
          >
            {translation}
          </div>
        )}
        <article onMouseUp={handleMouseUp}>
          From its beginnings 70 years ago, the brand stood for free-spirited
          bohemianism and bold confidence. Dominic Lutyens tells the story of a
          trailblazing Finnish phenomenon. M Marimekko, the Finnish brand famed
          for its fabrics printed with splashy, outsized motifs, arose just as
          Finland was regaining its autonomy and forging a new national identity
          in the postwar years. It clearly expressed optimism but a little-known
          fact about the label is its bohemian pedigree. Starting out as a
          textile brand that soon morphed into a globally successful fashion and
          home-furnishing label, its fan base numbered artists and fashion icons
          who represented progressive values, from the glamorous Jackie Kennedy,
          who snapped up seven Marimekko dresses, to artist Georgia O’Keeffe.
          More like this: - What your sneakers say about you - What does the
          'perfect man' look like? - The anti-minimalist trend for clutter
          Marimekko's unmistakable aesthetic is indivisible from the adventurous
          spirit of entrepreneur Armi Ratia, who co-founded the brand in 1951.
          Photographs of Ratia provide powerful projections of her personality
          and her brand's ethos. In one photo from the 1960s, she reclines on a
          hammock at her summer house in the countryside, Bökars, reading The
          Letters of F Scott Fitzgerald, copies of Elle and Vogue on her lap – a
          picture of bohemian, cultured bliss. By contrast, in one 1970s image,
          she cuts a formidable figure at her printing factory in Helsinki
          sporting a swashbuckling maxi-coat, trousers tucked into boots,
          looking single-minded and fearless. Story continues below The founder
          of Marimekko, Armi Ratia, photographed in the 1970s in her Helsinki
          printing factory (Credit: Marimekko) The founder of Marimekko, Armi
          Ratia, photographed in the 1970s in her Helsinki printing factory
          (Credit: Marimekko) Marimekko is still going strong, its carefree
          spirit encapsulated by its spring/ summer 2021 collaboration with
          Japanese clothing retailer Uniqlo, featuring roomy dresses emblazoned
          with the signature bold, colourful, large-scale prints. A book,
          Marimekko: The Art of Printmaking by Laird Borrelli-Persson, has been
          published to celebrate the lifestyle brand's 70th anniversary this
          year, charting how the well-connected, media-savvy Ratia – and the
          highly individualistic artists she hand-picked to design for her ­–
          shaped the label's audacious aesthetic. "When Armi set up Marimekko,
          her idea was to avoid well-trodden routes in textile design," says the
          brand's Minna Kemell-Kutvonen. Polite, itsy-bitsy florals were the
          norm in the textiles world internationally then, but Ratia
          counterintuitively championed outsized, abstract motifs in offbeat
          colour combinations. Ratia (née Airaksinen) was born in 1912 in
          Karelia, a province of Finland near to Russia. She studied textile
          design at the Central School of Applied Arts, Helsinki, graduating in
          1935.
        </article>
      </section>
    </div>
  );
}

export default App;
