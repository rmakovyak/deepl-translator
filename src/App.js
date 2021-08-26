import axios from 'axios';

import './App.css';

function translate(text) {
  return axios.post(
    'https://api-free.deepl.com/v2/translate',
    {
      text,
      source_lang: 'EN',
      target_lang: 'DE'
    },
    {
      headers: {
        Authorization: 'DeepL-Auth-Key 4d093aaf-627c-7e91-0f2d-3039a75e5947'
      }
    }
  );
}

translate();

function App() {
  const onHighlight = () => {};

  return (
    <div className="App">
      <header className="App-header">Babbel Deepl test</header>
      <section className="App-body">
        <p>Highlight text to see the translation</p>
        <article>
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
          1935. That year, she married Viljo Ratia, a soldier, and opened her
          own weaving workshop soon afterwards in Viipuri, then capital of
          Karelia. As a student, she was hugely influenced by avant-garde German
          design school the Bauhaus, a life-long passion evidenced by the
          presence of a photo of its founder Walter Gropius in her office. As US
          design critic Jane Holtz Kay noted in a story on Marimekko in The
          Boston Globe in 1974: "There behind the broad desk and cascading
          daisies in a glass bowl. Beneath the photo of Gropius, she sits. The
          indomitable woman who created what must be the world's largest source
          of design excellence in cloth, personifies a lifestyle at once casual
          and total." A mid-60s image reflects the brand's bohemian mood and
          connection to nature (Credit: Tony Vaccaro/ Tony Vaccaro Studio) A
          mid-60s image reflects the brand's bohemian mood and connection to
          nature (Credit: Tony Vaccaro/ Tony Vaccaro Studio) Kay was also struck
          by what she perceived to be Marimekko's egalitarian values: "The
          design way to defeat conspicuous consumption and class snobbery – the
          stick of good design beating the ills of the world." Ratia's interest
          in the Bauhaus meshed with Finland's established espousal of modernism
          by several avant-garde architects and designers, notably Finnish
          architects Alvar Aalto, Eliel Saarinen and his Finnish-American son
          Eero Saarinen. Bauhaus member László Moholy-Nagy influenced Aalto, who
          designed the Municipal Library in Viipuri; it was completed in 1935
          and helped to cement Finland's reputation for avant-garde design. In
          the postwar years, Finnish designer and sculptor Tapio Wirkkala was
          internationally acclaimed. Armi was free-spirited, and rejected
          notions of class and traditional gender roles – Laird Borrelli-Persson
          For Ratia, World War Two – during which Finland fought wars both
          against the Russians and Nazi Germany – was traumatic. Two of her
          brothers died fighting the Russians. After the war, Finland retained
          its independence but had to cede Karelia to Russia, forcing Ratia to
          leave the region. "Ratia experienced homelessness," says
          Borrelli-Persson. "This led her to value and find beauty in the simple
          things of home rather than in fancy possessions." A 1964 shot for Life
          magazine shows Ratia's country house, with Marimekko staff outside in
          the driveway (Credit: Tony Vaccaro/ Tony Vaccaro Studio) A 1964 shot
          for Life magazine shows Ratia's country house, with Marimekko staff
          outside in the driveway (Credit: Tony Vaccaro/ Tony Vaccaro Studio)
          Resettling in Helsinki, Ratia worked as a copywriter for an ad agency,
          presaging her flair for publicity. "After the war, young men and women
          wanted to rebuild Finland," says Borrelli-Persson. "Armi was
          free-spirited, and rejected notions of class and traditional gender
          roles." On leaving the military, Viljo bought an oilcloth factory
          called Printex, which went bankrupt soon after. Armi joined the
          company in 1949 and two years later she and Viljo co-founded textiles
          firm Marimekko. It was launched with a fashion show at Helsinki's
          Kalastajatorppa Hotel. Meaning "Mary's dress" in Finnish, the name
          Marimekko had a universal ring to it. More specifically, in postwar
          Finland there was a desire for innovation and optimism, and Marimekko
          was at the vanguard of this. "The brand's raison d’être from the start
          was to empower people to feel joy, which really resonated when
          national morale was low," says Kemell-Kutvonen. This happened to
          dovetail, she adds, with a particularly Finnish type of stoicism –
          sisu, meaning perseverance in the face of adversity. Moreover,
          Marimekko textiles, also adopted as furnishing fabrics in the home,
          helped to combat the gloom of Finland's long, dark winters. Forced to
          pay reparations to Russia, the country was desperately short of
          resources, and Marimekko's use of low-cost, utilitarian cotton
          reflected this. In 1953, Ratia hired young designer Vuokko
          Eskolin-Nurmesniemi, who created the charmingly hand-drawn,
          pinstripe-like Piccolo print. This found its way onto the Jokapoika
          shirt – the brand's first men's garment, based on Finnish farmers'
          shirts, but soon co-opted by women – and loose-fitting dresses also
          designed by Eskolin-Nurmesniemi. These offered an appealingly
          comfortable alternative to the restrictive, wasp-waisted silhouette of
          the 1950s.
        </article>
      </section>
    </div>
  );
}

export default App;
