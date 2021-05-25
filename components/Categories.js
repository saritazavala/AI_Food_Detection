import React from "react";
import uuid from "react-native-uuid";
import { View, StyleSheet, Text, Button } from "react-native";
import Category from "./Category";
const Categories = () => {
  const cat = [
    {
      category: "Carpaccio",
      image:
        "https://www.superama.com.mx/views/micrositio/recetas/images/comidaitaliana/carpaccio/Web_fotoreceta.jpg",
    },
    {
      category: "Espagueti",
      image:
        "https://recetinas.com/wp-content/uploads/2020/01/recetas-de-espaguetis.jpg",
    },
    {
      category: "Lasagna",
      image:
        "https://www.simplyrecipes.com/thmb/fJnwfVmIBHhBzbTz6ok6oL0VZuQ=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2004__12__lasagna-horiz-a-2000-a4631232672d4609b12b94da7a20ef90.jpg",
    },
    {
      category: "Pizza",
      image:
        "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg",
    },
    {
      category: "Risotto",
      image:
        "https://www.jessicagavin.com/wp-content/uploads/2020/12/how-to-make-risotto-22-1200.jpg",
    },
    {
      category: "Tiramisu",
      image:
        "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg",
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        {cat.map((c) => {
          return <Category title={c.category} uri={c.image} key={uuid.v4()} />;
        })}
      </View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: "75%",
    marginTop: 54,
  },
  buttonContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
});

export default Categories;
