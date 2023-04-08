import { MainLayout, DescriptionComponent } from "../../components";

export const TourismPage = () => {
  const Lakedata = [
    {
      heading: "Saif-Ul-Malook",
      description:
        "Saiful Muluk is located in the Mansehra district of Khyber Pakhtunkhwa, about 9 kilometres (5.6 mi) north of Naran,[2][3] in the northern part of Kaghan Valley. Malika Parbat, the highest peak in the valley is near the lake.[4] The lake is accessible from the nearby town of Naran during the summer season but access during winter is limited, as heavy snowfall and landslides threaten to cutoff the lake from other regions",
    },
    {
      heading: "Physical features",
      description:
        " Saiful Muluk was formed by glacial moraines that blocked the" +
        "water of the stream passing through the valley.[5] The Kaghan" +
        "Valley was formed in the greater Pleistocene Period dating back" +
        "almost 300,000 years when the area was covered with ice. Rising" +
        "temperatures and receding glaciers left a large depression where" +
        "glaciers once stood. Melting water collected into the lake.",
    },
    {
      heading: "Ecology",
      description:
        " The lake has rich eco-diversity and holds many species of" +
        "blue-green algae. Large brown trout are found in the lake, up to" +
        "about seven kilograms.[6] About 26 species of vascular plant" +
        "exist in the area, with Asteraceae the most commonly found" +
        "species. Other species commonly found in the region are:" +
        "Ranunculaceae, Compositae, Cruciferae, Gramineae, Apiaceae," +
        "Leguminosae, Scrophulariaceae and Polygonaceae",
    },
  ];

  return (
    <MainLayout>
      <DescriptionComponent
        title='Saif-Ul-Malook'
        shortdescription=''
        data={Lakedata}
      />
    </MainLayout>
  );
};
