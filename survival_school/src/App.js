import Block1 from "./pages/block1";
import Block2 from "./pages/block2";
import Block3 from "./pages/block3";
import Block4 from "./pages/block4";
import Block5 from "./pages/block5";

import {title, description} from "./data/block1";
import {leftImage, rightImage, title2, survivalItems, survivalHeading, paragraphs} from "./data/block2";
import {block3Data} from "./data/block3";
import {block4Data} from "./data/block4";

function App() {
console.log(title2, '!!!')
  return (
    <div className="App">
        <Block1 title={title} description={description}/>
        <Block2
            leftImage={leftImage}
            rightImage={rightImage}
            title2={title2}
            paragraphs={paragraphs}
            survivalHeading={survivalHeading}
            survivalItems={survivalItems}
        />
        <Block3 data={block3Data}/>
        <Block4 block4Data={block4Data} />
        <Block5 />
    </div>
  );
}

export default App;
