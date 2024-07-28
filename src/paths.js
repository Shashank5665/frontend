const paths = {
  home: {
    root: "/",
    one: "/one",
    two: "/two",
    game: {
      root: "/game",
      view: (id) => `/game/${id}`,
    },
    notFound: "*",
  },
};

export default paths;
