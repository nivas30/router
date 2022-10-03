import Content from "./Content";
import ReadMore from "./ReadMore";
import rectangle from "../Assets/Rectangle.svg";
import { WholeBlog,Latest,Latesttext } from "./NavBar.Styled";
function Profile(){
    const article = [
        {
            heading : "15 Disadvantages Of Freedom And How You Can Workaround It.",
            mail : "@samurai2099",
            date : "27 May",
            describe : <ReadMore>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus eget nunc 
                         scelerisque. Semper viverra nam libero justo. Ac ut consequat semper viverra nam libero justo 
                         laoreet sit. Feugiat nibh sed pulvinar proin gravida. Cras tincidunt lobortis feugiat vivamus.
                         Ut consequat semper viverra nam libero. Senectus et netus et malesuada. Mauris ultrices eros in 
                         cursus turpis. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. 
                         Aliquet nibh praesent tristique magna sit amet purus. Orci dapibus ultrices in iaculis nunc. 
                         At in tellus integer feugiat scelerisque varius. Volutpat consequat mauris nunc congue nisi vitae 
                         suscipit tellus mauris.
                       </ReadMore>,
            hint1 : "#meditation",
            hint2 : "#mentalpeace"
        },
        {
            heading : "The Death Of Freedom",
            mail : "@capitalism",
            date : "24 May",
            describe : <ReadMore>
                        A condimentum vitae sapien pellentesque. Eu sem integer vitae justo eget magna fermentum. Egestas
                        maecenas pharetra convallis posuere. Phasellus faucibus scelerisque eleifend donec pretium 
                        vulputate sapien. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Id aliquet risus feugiat 
                        in ante metus dictum at tempor. Morbi leo urna molestie at elementum eu. Feugiat pretium nibh 
                        ipsum consequat nisl vel pretium lectus. Eleifend quam adipiscing vitae proin sagittis. Egestas 
                        egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Id velit ut 
                        tortor pretium viverra suspendisse. Mi tempus imperdiet nulla malesuada pellentesque elit eget
                        gravida cum. Integer eget aliquet nibh praesent tristique.
                       </ReadMore>,
            hint1 : "#anarchy",
            hint2 : "#silence"
        }
    ];
    return(
      <div>
            <Latest>
                <img src={ rectangle } alt="Rectangle" />
                <Latesttext>Latest</Latesttext>
            </Latest>
    
           <WholeBlog>
             {
            article.map((feedback) => {
               return(
                  <Content   
                       Heading = {feedback.heading}
                       Mail = {feedback.mail}
                       Date = {feedback.date}
                       Describe = {feedback.describe }
                       Hint1 = {feedback.hint1}
                       Hint2 = {feedback.hint2} />
                   );
               })
            }
           </WholeBlog>
        </div>
    
    );
    
}
export default Profile;