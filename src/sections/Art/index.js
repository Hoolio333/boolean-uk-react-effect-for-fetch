import { useEffect, useState } from "react";

function ArtsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id&limit=7`
    )
      .then((res) => res.json())
      .then((parsedData) => setData(parsedData.data));
  }, []);
  console.log(data);
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul class="art-list">
          {data.map((item, id) => {
            return (
              <li key={id}>
                <div class="frame">
                  <img
                    src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>Artist: {item.artist_title}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  {item.subject_titles.map((subjectTitle) => {
                    console.log(subjectTitle);
                    return <li>{subjectTitle}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <li>
          <div class="frame">
            <img src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg" />
          </div>
          <h3>Beggar with Oysters (Philosopher)</h3>
          <p>Artist: Édouard Manet</p>
          <h4>Artistic Subjects:</h4>
          <ul>
            <li>Century of Progress</li>
            <li>men</li>
            <li>portraits</li>
            <li>world's fairs</li>
            <li>Chicago World's Fairs</li>
          </ul>
        </li>
      </div>
    </section>
  );
}

export default ArtsSection;
