
export default function (Countries) {

  const locationsResolvers = {
    Locations: {
      country: (location) => {
        return new Promise((resolve, reject) => {
            Countries.find({ query: { _id: location.country }}).then(result=>{
              resolve(result[0]);
            });
        });
        //return Countries.find({ query: { _id: location.country }}).then(result=>result[0]);
      }
    }
  };

  return locationsResolvers;
}
