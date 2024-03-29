import { MainLayout } from "../../components";
import sufi_music_culture from "../../assests/images/sufi_music_culture.jpg";
import dress_culture from "../../assests/images/dress-culture.jpg";
import food_culture from "../../assests/images/food_culture.jpg";

export const AboutUsPage = () => {
  return (
    <MainLayout>
      <div className='wrapper'>
        <h2>About Us</h2>

        <div className='culture-inner'>
          <div className='culture-box'>
            <div className='img-wrap'>
              <img src={sufi_music_culture} alt='music-culture' />
            </div>
            <h3>Sufism</h3>
            <p>
              It is a mystical form of Islam, a school of practice that
              emphasizes the inward search for The God and shuns materialism.
              About 60% Muslims in Pakistan regard themselves as followers of
              Sufi saints.
            </p>
          </div>

          <div className='culture-box'>
            <div className='img-wrap'>
              <img src={dress_culture} alt='dress-culture' />
            </div>
            <h3>Wearings</h3>
            <p>
              The Shalwar kameez, Achkan Sherwani and Kurta shalwar Kameez are
              the national dresses of Pakistan and is worn by men and women in
              all five provinces
            </p>
          </div>

          <div className='culture-box'>
            <div className='img-wrap'>
              <img src={food_culture} alt='food-culture' />
            </div>

            <h3>Food</h3>
            <p>
              Rice, wheat-based flatbread (roti, chappti, paratha, puri),
              lentils (dal), vegetables (sabzi), yogurt, and fruits (eaten with
              a dash of salt) are staples through out the country. A very
              popular breakfast is Halva Puri.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
