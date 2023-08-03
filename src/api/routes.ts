const swapiRoutes = {
  people: '/people/',
  character(id: string) {
    return `/people/${id}`;
  },
};

export default swapiRoutes;
