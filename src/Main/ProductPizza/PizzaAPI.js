
const getAPIContent = async () => {
    try {
      const response = await fetch(
        "https://quangsangjzy.github.io/api_food_app/pizza.json"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
};

export default getAPIContent;
