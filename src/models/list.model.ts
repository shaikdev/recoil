
import { instance } from "utils/axios.utils";

const list = {
  getManyList: () => {
    let promise = new Promise((resolve, reject) => {
      let url = "/users";
      instance()
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },


};

export default list;
