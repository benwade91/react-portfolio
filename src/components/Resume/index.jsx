import React from 'react';
import './style.css'
const Resume = () => {
    return <div className='resumeBody'>
        <a href="https://docs.google.com/document/d/1s2n5qTbV2ZZS1qKAZmlodEvU8re8H9vXfvWUXXDVLgA/export?format=pdf" className='fa fa-download fa-3x dlLink' download> </a>
        <iframe title='resume' src="https://docs.google.com/document/d/e/2PACX-1vSELbG2XkU8VGcopmlH20FPsoHQYuypq4Ojb0SdCaWmpletgWKmtlxZo6pncs0UrBJMsk4Q4a-UFuhj/pub?embedded=true"></iframe>
  
    </div>
}

export default Resume;