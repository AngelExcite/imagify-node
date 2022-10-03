/**
 * @param {string} api_key
 * @param {File} image
 * @return {JSON}
 */

class Imagify {
  constructor(api_key) {
    this.api_key = api_key;
    this.base_url = "https://app.imagify.io/api";
  }

  async compressImage(
    image,
    {
      normal = false,
      aggressive = true,
      ultra = false,
      keep_exif = false,
      resize = false,
      resize_width = false,
      resize_height = false,
      resize_percentage = false,
    }
  ) {
    const formData = new FormData();

    const data = {
      if(normal) {
        normal = true;
      },
      if(aggressive) {
        aggressive = true;
      },
      if(ultra) {
        ultra = true;
      },
      if(keep_exif) {
        keep_exif = true;
      },
      if(resize) {
        resize = true;
      },
      if(resize_width) {
        resize_width = resize_width;
      },
      if(resize_height) {
        resize_height = resize_height;
      },
      if(resize_percentage) {
        resize_percentage = resize_percentage;
      },
    };

    formData.append("image", image);
    formData.append("data", JSON.stringify(data));

    return fetch(`${this.base_url}/upload/`, {
      method: "POST",
      headers: {
        Authorization: `token ${this.api_key}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => {
        return err;
      });
  }
}

const _Imagify = Imagify;
export { _Imagify as Imagify };
