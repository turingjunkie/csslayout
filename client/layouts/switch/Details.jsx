import React, { useState } from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Switch');
    const [checked, setChecked] = useState(false);
    const toggle = () => setChecked(c => !c);

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Switch</h1>
            <div className="lh-copy mb3">The checkbox is placed inside a label. So when clicking on the label, the checkbox will be checked even though it's hidden.</div>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <label className={`ba br-pill h2 w3 flex ${checked ? 'justify-end b--blue bg-blue' : 'b--black-30 bg-black-10'}`}>
                            <input type="checkbox" className="dn" checked={checked} onClick={toggle} />
                            <div className={`bg-white br-pill w2 ${checked ? '' : 'ba b--black-30'}`} />
                        </label>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<label style="
    display: flex;

    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    height: 32px;
    width: 64px;

    /* OFF status */
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid rgba(0, 0, 0, .3);

    /* ON status */
    background-color: #357edd;
    border: 1px solid #357edd;
    /* Push the circle to the right */
    justify-content: flex-end;
">
    <!-- Hide the input -->
    <input type="checkbox" style="display: none" />

    <!-- Circle -->
    <div style="
        /* Rounded border */
        border-radius: 9999px;

        /* Size */
        width: 32px;

        background-color: #FFF;

        /* OFF status */
        border: 1px solid rgba(0, 0, 0, .3);
    " />
</label>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;