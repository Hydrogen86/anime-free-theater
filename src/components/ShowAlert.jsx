import Swal from "sweetalert2";

const ShowAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: "OK"
    });
};

export default ShowAlert
