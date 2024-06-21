import React from 'react';
import '../../Styles/Socials_Styles.css';
import { Timeline } from 'react-twitter-widgets';


const Socials = () => {
    return (
        <div className="Socials">
            <h2>SOCIALS</h2>
            <div className="socialsContent">
            <p className="socialsArticle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec orci nulla. In a mollis nunc. Fusce nec eros lobortis, dapibus ligula vel, dapibus ex. Curabitur diam mi, faucibus eget urna eu, feugiat tincidunt erat. Aliquam eu sodales purus, ac feugiat nisl. Quisque auctor consectetur tempor. Sed facilisis mi nisl. Sed tempus volutpat lacinia. Suspendisse egestas quis sem nec volutpat. Nunc rhoncus est id purus interdum sollicitudin. Fusce et sem urna. Fusce ultricies elementum lectus eget ornare. Morbi commodo augue vel ante pretium porttitor. In dolor ante, consequat a quam et, placerat mollis elit. Mauris ullamcorper sapien a augue pretium fermentum. Pellentesque justo ligula, interdum eu ultrices vitae, interdum in augue. Qs purus, ac feugiat nisl. Quisque auctor consectetur tempor. Sed facilisis mi nisl. Sed tempus volutpat lacinia. Suspendisse egestas quis sem nec volutpat. Nunc rhoncus est id purus interdum sollicitudin. Fusce et sem urna. Fusce ultricies elementum lectus eget ornare. Morbi commodo augue vel ante pretium porttitor.</p>
<div className="twitterTimeline">
<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'Richmond_FC'
  }}
  options={{
    height: '400'
  }}
/>
</div>
</div>
    </div>
    );
};

export default Socials;