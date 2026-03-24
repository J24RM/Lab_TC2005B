const shiny = () => {
    pokemones = ["Bulbasaur", "Ivysaur","Venasaur","Charmander","Charmeleon","Charizard"];

    imagenes = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7760b24e-df85-44f1-82f3-a49cfdc0ecbb/diwd89o-b343e3cd-2f39-4417-b01a-4c6f9b018f2a.png/v1/fill/w_512,h_512/pokemon_gen_1_bulbasaur_front_sprites__shiny__by_argentenuem_diwd89o-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6Ii9mLzc3NjBiMjRlLWRmODUtNDRmMS04MmYzLWE0OWNmZGMwZWNiYi9kaXdkODlvLWIzNDNlM2NkLTJmMzktNDQxNy1iMDFhLTRjNmY5YjAxOGYyYS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.A4yj4KrquX6UWgfmhG5gH1yN-qlSX-gnGZdiYvCQgck"
        ,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7760b24e-df85-44f1-82f3-a49cfdc0ecbb/diwikox-5cc224ed-3648-4c7c-a4da-46a1c380ae92.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NzYwYjI0ZS1kZjg1LTQ0ZjEtODJmMy1hNDljZmRjMGVjYmIvZGl3aWtveC01Y2MyMjRlZC0zNjQ4LTRjN2MtYTRkYS00NmExYzM4MGFlOTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AVzRw4lTDfi3omgCyHh5A_95kgaIcBJXdCsEKDOcak8"
    ,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7760b24e-df85-44f1-82f3-a49cfdc0ecbb/dix075l-e6c83702-529c-40b7-af03-17e785723ae4.png/v1/fill/w_512,h_512/pokemon_gen_1_venusaur_front_sprites__shiny__by_argentenuem_dix075l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6Ii9mLzc3NjBiMjRlLWRmODUtNDRmMS04MmYzLWE0OWNmZGMwZWNiYi9kaXgwNzVsLWU2YzgzNzAyLTUyOWMtNDBiNy1hZjAzLTE3ZTc4NTcyM2FlNC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RGScNn4ckbAi8sa5RB3sNVowL5h7K89GG5Y0P3zJr_s"
,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7760b24e-df85-44f1-82f3-a49cfdc0ecbb/dix0r88-d33474a6-a58a-4aae-827d-36c4ac585e1e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NzYwYjI0ZS1kZjg1LTQ0ZjEtODJmMy1hNDljZmRjMGVjYmIvZGl4MHI4OC1kMzM0NzRhNi1hNThhLTRhYWUtODI3ZC0zNmM0YWM1ODVlMWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nCHUT956ckej2Z_wzwbl26UMYWjj2wMYMQm_Is8L_mA"
,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7760b24e-df85-44f1-82f3-a49cfdc0ecbb/dix19j5-e444d58b-c48e-48b8-8735-2f9c405ee780.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NzYwYjI0ZS1kZjg1LTQ0ZjEtODJmMy1hNDljZmRjMGVjYmIvZGl4MTlqNS1lNDQ0ZDU4Yi1jNDhlLTQ4YjgtODczNS0yZjljNDA1ZWU3ODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TJtD-mhw2WGCnYwCjDKbcQf5rrEkOdviuLhCjpZ-AHk"
,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54a79f8c-f776-4a15-aa52-037af4fef795/d99hani-e4f1ca6b-4e2f-4c0f-9bb4-f8e30f7e2092.jpg/v1/fill/w_400,h_377,q_75,strp/shiny_charizard_sprite_by_thepixelater_d99hani-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc3IiwicGF0aCI6Ii9mLzU0YTc5ZjhjLWY3NzYtNGExNS1hYTUyLTAzN2FmNGZlZjc5NS9kOTloYW5pLWU0ZjFjYTZiLTRlMmYtNGMwZi05YmI0LWY4ZTMwZjdlMjA5Mi5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.eZ1YL_Rl5J79eqxDgDNXt20abxtK3ED4qNxtpcpoS4E"
,
];

        console.log("SHINYYY")
    for(let i = 0; i < pokemones.length; i++){
        // Obtener imagen
        const imagen = document.getElementById(pokemones[i]);

        imagen.src = imagenes[i];
    }   
};


const infoPoke = (pokemon, id) => {
    infoP = {Bulbasaur : `Bulbasaur es un Pokémon cuadrúpedo de color verde, posee manchas de una tonalidad más oscura del mismo color con distintas formas geométricas. Su cabeza representa cerca de un tercio de su cuerpo. En su frente se ubican tres manchas que pueden cambiar de posición, forma o lugar dependiendo del ejemplar. Tiene como orejas muñones pequeños y puntiagudos. Sus ojos son grandes y de color rojo. Sus patas son cortas y posee tres garras en cada una. Este Pokémon tiene plantado un bulbo en el lomo desde que nace, esta semilla crece y se desarrolla a lo largo del ciclo de vida de Bulbasaur a medida que suceden sus evoluciones. El bulbo absorbe y almacena la energía solar que Bulbasaur necesita para hacer florecer el bulbo de su lomo y evolucionar en Ivysaur. Dicen que cuanta más luz consuma la semilla, más rápido crecerá y brotará, por lo que es muy común ver a este Pokémon tumbado echándose una siesta en lugares donde los rayos del sol lleguen a plenitud. Por otro lado, gracias a los nutrientes que el bulbo almacena, puede pasar varios días sin comer. Su cuerpo según a palabras de Ken Sugimori y Junichi Masuda en una entrevista, está basado en un anfibio (sapo o rana), al igual que toda su línea evolutiva.
Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución`,
Ivysaur : `Ivysaur posee una tonalidad azulada más viva que la de su preevolución, Bulbasaur. Además, sus ojos se mantienen rojos y sus pupilas negras. El bulbo que había en la espalda de Bulbasaur ha brotado mostrando un botón de flor, la cual aún permanece cerrada. Esta flor es usada por Ivysaur de la misma forma que Bulbasaur empleaba su bulbo para la mayoría de sus ataques. La flor crece con la exposición directa al sol, forzando a Ivysaur a caminar a todas horas para conseguir que la luz sea absorbida plenamente, debido a esto la flor se va desarrollando, para soportar su peso y su tallo, sus patas se hacen más robustas y fuertes que las de Bulbasaur, sin embargo, ahora se le dificulta pararse sobre sus patas traseras.
Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución`,
Venasaur : `Venusaur, según Ken Sugimori y Junichi Masuda en una entrevista, está basado en una rana, al igual que toda su línea evolutiva3. El botón de flor que lleva sobre su lomo se abre completamente, dejando ver una enorme flor rosada, parecida a Rafflesia arnoldii y unas hojas semejantes a las o de una cicadácea, que se nutre de la luz solar por fotosíntesis. A través de ella, Venusaur realiza uno de sus ataques más potentes: rayo solar. Esta planta segrega una savia muy dulce que atrae a muchos Pokémon de tipo bicho. Venusaur tiene la habilidad de liberar un aroma dulce que puede tranquilizar a los demás Pokémon. Los Venusaur son muy longevos y cuando alcanzan una larga edad, el aroma que sale de su flor es tan potente que puede hacer florecer los bosques y hacer brotar a los árboles secos. Su aroma lo emana incluso cuando se encuentra durmiendo. Si un Venusaur duerme con sus lianas sin retraer, es un indicativo de que el Pokémon se encuentra muy a gusto y relajado.
Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución`,
Charmander : `Charmander es un pequeño monstruo bípedo parecido a un lagarto. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola, cuya punta está envuelta en llamas. Charmander y sus evoluciones, Charmeleon y Charizard, tienen una pequeña llama en la punta de sus colas desde que nacen. La intensidad con la que ésta arde es un indicador del estado de salud y emocional de este Pokémon: si la llama arde con mucha fuerza, indica que está completamente sano, y si arde muy levemente, significa que se encuentra débil. El Pokémon podría morir si la llama de su cola se apaga. Cuando son bebés aún no están familiarizados con el fuego, pudiendo llegar a quemarse a sí mismos.
Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución`,
Charmeleon : `Charmeleon es un gran lagarto bípedo con escamas de color rojo oscuro y en la parte inferior de color crema (desde el pecho hasta abajo), posee como característica general una llama en la punta de su cola al igual que Charmander y Charizard. Esta refleja el estado físico y emocional del Pokémon y si la llama se extingue, también lo hace la vida del mismo. Tiene ojos azules estrechos. El color de su piel es más oscuro que el de Charmander y el de Charizard, y también lo es su llama.
Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución`,
Charizard : `La figura de Charizard es la de un dragón erguido sobre sus dos patas traseras, que sostienen su peso. Posee unas poderosas alas y un abrasador aliento de fuego. También posee un cuello largo y una poderosa cola terminada en una llama que arde con más fuerza si ha vivido duros combates, aunque al igual que con su línea evolutiva, si esta se apaga el Pokémon puede llegar a morir.
Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución`,

    };
    const elemento = document.getElementById(id);

        elemento_original = elemento.innerHTML;
    
    elemento.innerHTML = 
        ` 
        <div class="notification"> 
        <strong> ${pokemon} </strong>
        <br>
        ${infoP[pokemon]}
        </div>
        `
}

const ocultarInfo = (id) => {
    const elemento = document.getElementById(id);

    elemento.innerHTML = elemento_original;
}
