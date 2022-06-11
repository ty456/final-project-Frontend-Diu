import React from 'react';

const Overview = () => {
    return (
        <div>
            <div>
                <h3>About Me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <h3>Education</h3>
            <div style={{ borderLeft: '1px solid black', paddingLeft: '30px' }}>
                <div>
                    <p>American Dental Medical University</p>
                    <p>BDS</p>
                    <p>1998 - 2003</p>
                </div>
                <div>
                    <p>American Dental Medical University</p>
                    <p>BDS</p>
                    <p>1998 - 2003</p>
                </div>
            </div>

            <h3>Work & Experience</h3>
            <div style={{ borderLeft: '1px solid black', paddingLeft: '30px' }}>
                <p>Glowing Smiles Family Dental Clinic </p>
                <p>2010 - Present (5 years)</p>
                <p>Comfort Care Dental Clinic</p>
                <p>2007 - 2010 (3 years)</p>
            </div>


            <h3>Awards</h3>
            <div style={{ borderLeft: '1px solid black', paddingLeft: '30px' }}>
                <div>
                    <p>July 2019 </p>
                    <p>Humanitarian Award</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div>
                    <p>July 2017 </p>
                    <p>Certificate For International Volunteer Service</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div>
                    <p>July 2015 </p>
                    <p>The Dental Professional of The Year Award</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>

        </div>
    );
};

export default Overview;