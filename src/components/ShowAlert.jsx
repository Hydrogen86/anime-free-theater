import Swal from "sweetalert2";

const ShowAlert = () => {
    Swal.fire({
      title: 'Hello Anime Fam!',
      text: `Sorry! the Navigation button is not available, Webpage is not yet updated`,
      icon: 'warning',
      confirmButtonText: "Let's Go!"
    });
};

export default ShowAlert
