import React, { useState } from "react";
import "./App.scss";
import Overlay from "react-overlay-component";

function App() {
    const [isOpen, setOverlay] = useState(false);
    const [isOpen1, setOverlay1] = useState(false);

    const closeOverlay = () => setOverlay(false);
    const closeOverlay1 = () => setOverlay1(false);

    const configs = {
        animate: false,
        contentClass: "container overlay-content",
    };

    const configs1 = {
        animate: true,
        top: `5em`,
        clickDismiss: false,
        escapeDismiss: false,
        focusOutline: true,
    };

    return (
        <div>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
                open modal 0
            </button>
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                Hello there <br />
                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    close
                </button>
            </Overlay>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque arcu
                nisi, non efficitur orci consectetur id. Nam non elit sem. Praesent porttitor augue
                vel sem pellentesque, vitae tincidunt lectus sagittis. Aliquam laoreet est eget mi
                tempor sollicitudin ut at nibh. Pellentesque nulla erat, volutpat ac sapien non,
                fringilla sagittis nibh. Donec posuere odio nibh, sit amet facilisis eros
                pellentesque nec. Nulla ac ligula ut elit sodales ultrices quis ut odio. Integer
                cursus lorem vel semper dapibus. Praesent viverra mauris maximus ex laoreet mattis.
                Maecenas a interdum mauris. Mauris molestie, odio eget rhoncus molestie, ex odio
                condimentum enim, et vehicula sem quam non odio.
            </p>

            <button
                className="primary"
                onClick={() => {
                    setOverlay1(true);
                }}
            >
                open modal 1
            </button>
            <Overlay configs={configs1} isOpen={isOpen1} closeOverlay={closeOverlay1}>
                <h3>Modal with large content</h3>
                <p>
                    Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique
                    mollis nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante
                    urna egestas neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem
                    ullamcorper egestas. Duis quis sagittis ante. Morbi nibh ex, lacinia ac
                    convallis eu, sagittis ut turpis. Etiam ultrices viverra diam, et dignissim
                    dolor commodo rhoncus. Aenean euismod lacus eu sapien dictum, a efficitur mi
                    condimentum. Mauris non enim lacus. Nulla tempor et dolor et fringilla. Praesent
                    tempor sapien et porttitor aliquam. Phasellus vulputate libero volutpat,
                    sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas
                    lacinia.
                </p>
                <p>
                    Nulla nec est justo. Fusce ipsum velit, ullamcorper ut mollis ac, eleifend non
                    lacus. Maecenas faucibus ullamcorper nulla. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Morbi dignissim, mi eget viverra auctor, turpis
                    turpis dignissim sapien, non bibendum purus ante ut dolor. Proin eget rutrum
                    ipsum, quis ornare ex. Donec a dui non est ultricies auctor. Vestibulum auctor
                    lobortis scelerisque. Mauris metus metus, fringilla quis enim sed, dapibus
                    eleifend ipsum. Vestibulum sit amet blandit neque. Nam auctor augue mi, nec
                    commodo sapien gravida vel. Suspendisse purus risus, pharetra id elit in,
                    pellentesque porta diam. Nulla eget libero quis nulla pulvinar feugiat ut ut
                    dolor. Aliquam et metus ligula.
                </p>
                <p>
                    Vestibulum a tortor rhoncus massa convallis pellentesque. Phasellus eu ipsum nec
                    tortor rutrum blandit. Suspendisse lobortis, ex quis feugiat consectetur, odio
                    dolor fermentum tortor, quis gravida elit massa sed orci. Mauris tristique felis
                    nunc, ac auctor ipsum pulvinar eu. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Curabitur volutpat nisl ut leo
                    cursus, nec imperdiet purus euismod. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas. Vivamus pulvinar
                    scelerisque metus, eget finibus arcu. Aenean et nisi et risus tincidunt pharetra
                    scelerisque sit amet justo. Integer dapibus, mi id tempus hendrerit, velit purus
                    vehicula nunc, id aliquet nibh lectus sit amet sapien. Proin semper aliquam
                    nunc, at congue urna malesuada sed. Ut at leo mi. Morbi sed dui vitae lacus
                    bibendum suscipit sed id sapien.
                </p>
                <p>
                    Nulla nec est justo. Fusce ipsum velit, ullamcorper ut mollis ac, eleifend non
                    lacus. Maecenas faucibus ullamcorper nulla. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Morbi dignissim, mi eget viverra auctor, turpis
                    turpis dignissim sapien, non bibendum purus ante ut dolor. Proin eget rutrum
                    ipsum, quis ornare ex. Donec a dui non est ultricies auctor. Vestibulum auctor
                    lobortis scelerisque. Mauris metus metus, fringilla quis enim sed, dapibus
                    eleifend ipsum. Vestibulum sit amet blandit neque. Nam auctor augue mi, nec
                    commodo sapien gravida vel. Suspendisse purus risus, pharetra id elit in,
                    pellentesque porta diam. Nulla eget libero quis nulla pulvinar feugiat ut ut
                    dolor. Aliquam et metus ligula.
                </p>
                <button
                    className="danger"
                    onClick={() => {
                        setOverlay1(false);
                    }}
                >
                    close
                </button>
            </Overlay>

            <p>
                Aenean fermentum erat et arcu dictum feugiat. Duis libero nunc, imperdiet nec
                condimentum a, mattis sed odio. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Cras vel sagittis mauris, eget feugiat
                dui. Vivamus id feugiat erat. Proin vehicula bibendum molestie. Curabitur nec varius
                felis. Mauris nulla metus, convallis ut purus at, rhoncus dapibus dolor. Vivamus non
                aliquam odio, sit amet faucibus sapien. Fusce laoreet vel orci vitae vulputate. Cras
                dolor lectus, convallis sit amet congue eget, laoreet faucibus nisl. Phasellus vitae
                erat est. Fusce eu rhoncus justo. In vestibulum, leo quis vehicula ultricies, risus
                odio euismod est, vel varius orci lorem commodo leo. Pellentesque a dignissim nunc.
                Sed vel leo gravida, vestibulum nisl ut, consectetur elit. Aenean vel est
                condimentum, cursus diam sit amet, porttitor libero. Mauris sed iaculis neque.
                Vivamus lacinia ex in imperdiet venenatis. Praesent sodales, turpis in sodales
                dignissim, eros tortor commodo felis, eu suscipit massa risus non libero. Donec
                porta sagittis purus, eu aliquet felis fringilla et. Nam pretium urna nec cursus
                efficitur. Donec a cursus dolor, finibus mattis urna. Donec hendrerit fringilla
                felis. Vestibulum id massa metus. Sed aliquet sodales aliquet. Duis eget lectus eget
                risus porttitor vehicula. Nam vestibulum a sapien ut fermentum. In neque lectus,
                sodales in metus nec, efficitur tincidunt orci. Duis convallis mauris sit amet erat
                ornare, sit amet placerat velit vehicula. Maecenas magna risus, gravida nec tempor
                eget, consectetur facilisis tellus. Aenean pulvinar nulla libero, at suscipit ante
                tempus non. Donec sit amet lorem lectus. Nunc a diam at libero efficitur aliquam.
                Duis iaculis est turpis, ut vehicula massa efficitur id. Nam efficitur tristique
                nunc sed efficitur. Proin id est nisi. Donec pellentesque est non augue interdum,
                sed tempus nisi dignissim. Morbi venenatis lacinia tellus, ac dictum erat ultrices
                sed. Vivamus in leo sed neque facilisis sollicitudin. Vivamus viverra porttitor
                dignissim. Nam non tristique erat, id sagittis purus. Morbi vel egestas nisi. Donec
                massa risus, iaculis sed nisi vel, tincidunt tincidunt quam. Aliquam posuere metus
                at neque condimentum accumsan. Proin a neque felis. Sed suscipit at mi at fringilla.
                Sed maximus leo turpis, vitae tempor mauris volutpat ut. Morbi blandit, urna vitae
                elementum facilisis, quam arcu tristique erat, ac gravida eros tortor id nunc.
                Nullam id justo at orci pulvinar eleifend eget sed libero. Proin pulvinar interdum
                rhoncus. Etiam efficitur fringilla lacus, in mattis lacus ultrices at. Nulla
                elementum dui non aliquet feugiat.
            </p>
            <p>
                Pellentesque elit nibh, mattis sed mollis at, rutrum et dolor. Donec imperdiet elit
                orci, eget imperdiet mauris semper id. Integer eget massa augue. Nunc mattis nibh id
                metus molestie, ut vestibulum nunc gravida. Nulla ex quam, mollis ac eros sed,
                consectetur vestibulum velit. Mauris eu iaculis quam, quis molestie lorem. Maecenas
                cursus quam congue enim feugiat, id laoreet dui cursus. Vestibulum vel nunc commodo,
                tincidunt enim nec, rhoncus est. Aliquam vulputate tempus tristique. Nullam molestie
                fringilla nisl sit amet hendrerit. Suspendisse a leo euismod, dapibus neque a,
                ultricies risus. Morbi vestibulum accumsan orci nec pellentesque. Donec vel mauris
                elementum velit suscipit hendrerit eu nec urna. Quisque dapibus, turpis ac congue
                blandit, neque sapien malesuada dolor, eget congue leo felis at risus. Sed eget
                lectus lectus. Nulla et convallis neque. Fusce nec gravida ligula, nec commodo
                ligula. Aenean eu odio aliquet, iaculis mauris posuere, imperdiet purus. Ut urna
                elit, faucibus quis diam in, cursus vehicula tortor. Nulla accumsan purus ut dolor
                malesuada, non ultricies risus ullamcorper. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec vitae ligula at velit tempor ullamcorper. Nunc consequat
                tortor nec turpis facilisis ullamcorper. Duis eget luctus est. Cras ac vulputate
                nibh. Curabitur sodales euismod enim et aliquet. Nunc rutrum, nisl bibendum suscipit
                efficitur, nulla nisl eleifend diam, ac maximus odio arcu ac dui. Suspendisse at
                orci id mi accumsan bibendum vitae quis lorem. Donec dolor nisi, ultrices vitae
                eleifend et, volutpat in diam. Vivamus nec lectus in mi facilisis facilisis.
                Maecenas malesuada rhoncus fermentum. Morbi bibendum, magna at feugiat euismod,
                justo ex maximus ligula, sollicitudin dictum erat metus vitae massa. Aenean
                consequat, dui sit amet tempor suscipit, nisi ante consectetur ex, quis tempus
                tellus massa vehicula nisi. Sed arcu mauris, dictum sit amet eros quis, dictum
                lacinia nulla. Ut eget urna facilisis, posuere diam ac, elementum augue. Donec et
                dui a urna pulvinar vulputate. Ut interdum elit quam, maximus mollis sapien viverra
                ut. Suspendisse velit enim, pulvinar ut neque non, consectetur gravida orci. Nam
                condimentum urna eu sem volutpat, ac hendrerit ex maximus. Vivamus felis enim,
                eleifend vitae sollicitudin at, porttitor eget ex. Nullam et est fringilla leo
                suscipit tincidunt. Fusce quis ultrices ligula. Sed eget ornare felis. Praesent
                tempor, eros congue consequat efficitur, purus mi aliquam sapien, eget ultrices
                magna justo ac sapien. Proin consequat hendrerit eros, a ornare lacus. Nunc
                ullamcorper eu risus vitae cursus. Duis viverra eu eros eget accumsan. Sed suscipit
                mauris ut sem sodales, sed vestibulum massa sagittis. Nam auctor sem id neque
                lacinia, vel sagittis elit tempor. Integer varius arcu id ipsum consectetur
                pharetra. Curabitur pharetra convallis mauris, ut facilisis justo iaculis eu. Etiam
                vulputate hendrerit ex at tincidunt. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Vivamus vestibulum aliquet augue, vel
                mattis lorem efficitur sed. Phasellus in pulvinar neque.
            </p>
        
        </div>
    );
}

export default App;
