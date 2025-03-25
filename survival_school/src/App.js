import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Block1 from "./pages/block1";
import Block2 from "./pages/block2";
import Block3 from "./pages/block3";
import Block4 from "./pages/block4";
import Block5 from "./pages/block5";
import Questions from "./pages/apply";
import UserForm from "./pages/Form";
import { title, description } from "./data/block1";
import { leftImage, rightImage, title2, survivalItems, survivalHeading, paragraphs } from "./data/block2";
import { block3Data } from "./data/block3";
import { block4Data } from "./data/block4";
import { block5Data } from "./data/block5";
import OverlayText from './componetns/OverlayText';
import { FormProvider } from './context/FormContext';
import DinoGame from "./pages/game";

function App() {
    return (
        <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <div className="App">
                            <div style={{ position: "relative" }}>
                                <Block1 title={title} description={description} />
                                <OverlayText />
                                <Block2
                                    leftImage={leftImage}
                                    rightImage={rightImage}
                                    title2={title2}
                                    paragraphs={paragraphs}
                                    survivalHeading={survivalHeading}
                                    survivalItems={survivalItems}
                                />
                            </div>
                            <Block3 data={block3Data} />
                            <Block4 block4Data={block4Data} />
                            <Block5 block5Data={block5Data} />

                            {/* Убираем белые отступы */}
                            <div className="game-container">
                                <DinoGame />
                            </div>
                        </div>
                    } />
                    <Route path="/apply" element={<Questions />} />
                    <Route path="/form" element={<UserForm />} />
                </Routes>
            </Router>
        </FormProvider>
    );
}

export default App;
