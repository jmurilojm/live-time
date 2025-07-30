const filmes = [
{
  id: 'tt23149780',
  nome: 'Eden 2024 R 2 h',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeavNeO2hmDVOnKCqz5v7ruNVAPQttFB7c91bI6r9yu5JyuHHlUWpG_xOm&s=10'
},
{
  id: 'tt5950044',
  nome: 'Superman 2025 14 2 h 9 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWNHdBOsMme95Fge5F--ZCR28LLqNrb66XQ&s'
},
{
  id: 'tt20969586',
  nome: 'Thunderbolts* 2025 14 2 h 7 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5g9q0sHc15_lQGU5gbF7G7u23i6Vpic_21UoSBR1apvKO-QzjK63R98&s=10'
},
{
  id: 'tt0899043',
  nome: 'Operação Vingança Título original: The Amateur 2025 14 2 h 2 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7Uu2FXkrVUXcjyFb_pQD55LOZEHcm0k0MG2CoVdimlFvUu7yBl_Ti1Q&s=10'
},
{
  id: 'tt31193180',
  nome: 'Pecadores Título original: Sinners 2025 16 2 h 17 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHchm2Jfg3FhLHuP1fs_8Nh59Ac_0-QLsEg&s'
},
{
  id: 'tt2049403',
  nome: 'Os Fantasmas Ainda se Divertem: Beetlejuice Beetlejuice | Título original: Beetlejuice Beetlejuice | 2024 | 14 | 1 h 45 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tt7Q-7vT3bWdk_xIM2XCvsVJieq9AJsZoTi348lOuGVDvzd-kYaYtoyq&s=10'
},
{
  id: 'tt28015403',
  nome: 'Herege | Título original: Heretic | 2024 | 16 | 1 h 51 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EdFlQUWUU5GFNiQZvTXxpkxdxxxyXNhOOjRt-cVGoVmMnZQ0R8rzSLLh&s=10'
},
{
  id: 'tt26743210',
  nome: 'Como Treinar o Seu Dragão | Título original: How to Train Your Dragon | 2025 | 10 | 2 h 5 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPeQG1ngxPnYPxhiTxgdTLrfr0avN7qOwByvQaMyYJYg08bKJuSU3OzBx&s=10'
},
{
  id: 'tt3566834',
  nome: 'Um Filme Minecraft | Título original: A Minecraft Movie | 2025 | 10 | 1 h 41 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36ly20z25LzR0nACq5Tyb7thYuzhbU2Vnacu0rvNIqkeabK_GmKyQcLw&s=10'
},
{
  id: 'tt6208148',
  nome: 'Branca de Neve |Título original: Snow White | 2025 | 10 | 1 h 49 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vvFL6ns3ZmhyphqMC5fDTrURFEmOyd6F0pWC9XABUyv5HmPgroLqLjS2&s=10'
},
{
  id: 'tt31036941',
  nome: 'Jurassic World: Recomeço | Título original: Jurassic World: Rebirth | 2025 | 14 | 2 h 14 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsCnBFXaThqTz-6hKEcJqkw_Tpx0mrJJYLZeVJCNQfQDi3g3wSBu9G8&s=10'
},
{
  id: 'tt26342662',
  nome: 'M3GAN 2.0 (MEGAN) | 2025 | 16 | 2 h',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62r-npDhy6bFAiXHhymAR89G2E01wkGLvC1ounP1BOy3EtCvSwaGd8bov&s=10'
},
{
  id: 'tt8760708',
  nome: 'M3GAN (MEGAN) | 2022 | 14 | 1 h 42 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgjxYp6nx_wUpmMLppai0opQx5Mt8VOsJaRdPH1RP8ongelAvT-P_-aGl&s=10'
},
{
  id: 'tt31314296',
  nome: 'A Mulher no Jardim | Título original: The Woman in the Yard | 2025 | 16 | 1 h 28 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4Jmt7bgiq_xol_ISiYq8sys47e_-uB5e7RRZ0ekw0u1AQxcOVth0b81J&s=10'
},
{
  id: 'tt9150192',
  nome: 'Resgate Implacável | Título original: A Working Man | 2025 | 16 | 1 h 56 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJc8R_d1IxB4I-S7R98-1a9U6zumdCSn8Xt7omJuuUIQHNGJMyFGrB_6E&s=10'
},
{
  id: 'tt7068946',
  nome: 'O Contador 2 | Título original: The Accountant 2 | 2025 | 16 | 2 h 12 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdSiaLr0Y4PN-ZZOazz2C1zSNjsggdR-YaImmAUz_NllWbXDoE11-SWY&s=10'
},
{
  id: 'tt27075958',
  nome: 'A Fonte da Juventude | Título original: Fountain of Youth | 2025 | PG-13 | 2 h 5 min',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSim_SixFpjGdfITtU7K5moJCImoJx33DQZy38ajj0kpqh3-jz8BBqNL2U&s=10'
}]

/*

,
{
  id: '',
  nome: '',
  img: ''
}

*/
