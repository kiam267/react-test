import TeacherImage from "../../assets/img/headTeacher.jpg";
import TeachersBodyImage from "../../assets/img/pexels-max-fischer-5212345.jpg";
import TeachersCrad from "../TeachersItems/TeachersCrad";

export default function MediaCard() {
  return (
    <>
      <div>
        <img
          className="w-100"
          src={TeachersBodyImage}
          alt=""
          style={{ height: "400px", objectFit: "cover" }}
        />
      </div>
      <div className="container mt-5">
        <h1 className="text-center py-2 fw-bold ">HEAD TEACHERS : </h1>
        <div className="row justify-content-center ">
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
        </div>
        <h1 className="text-center my-3 fw-bold">OTHERS TEACHERS : </h1>
        <div className="row justify-content-start mt-3 gy-4">
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
        </div>

        <h1 className="text-center py-4 fw-bold text-uppercase">
          office assistant :
        </h1>
        <div className="row justify-content-center ">
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
        </div>

        <h1 className="text-center py-4 fw-bold "> OTHERS : </h1>
        <div className="row justify-content-center ">
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
        </div>
      </div>
    </>
  );
}
