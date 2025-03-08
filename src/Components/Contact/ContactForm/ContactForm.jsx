import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showAlert } from "src/Features/alertsSlice";
import emailjs from "@emailjs/browser";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e42yfzp", 
        "template_uhkty3d", 
        formRef.current, 
        "j6YahqNZoebTYlmcn"
      )
      .then(
        () => {
          showSentMsgAlert(dispatch, t);
          resetForm(e, setPhone);
        },
        (error) => {
          console.error("FAILED...", error.text);
          dispatch(
            showAlert({
              alertText: t("toastAlert.messageFailed"),
              alertState: "error",
              alertType: "alert",
            })
          );
        }
      );
  };

  return (
    <form ref={formRef} className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <div className={s.wrapper}>
          <div className={s.input}>
            <label htmlFor="username">{t("inputsPlaceholders.yourName")}</label>
            <input type="text" name="user_name" id="username" required  placeholder="" />
          </div>

          <div className={s.input}>
            <label htmlFor="email">{t("inputsPlaceholders.yourEmail")}</label>
            <input type="email" name="user_email" id="email" required  placeholder=""/>
          </div>

          <div className={s.input}>
            <label htmlFor="phone">{t("inputsPlaceholders.yourPhone")}</label>
            <input
              type="tel"
              placeholder=""
              name="user_phone"
              id="phone"
              value={phone}
              required
              onChange={(e) => handleMobileOnChange(e, setPhone)}
            />
          </div>
        </div>

        <textarea
          name="message"
          placeholder={t("inputsPlaceholders.yourMessage")}
          required
        />
      </div>

      <div className={s.buttons}>
        <button type="reset">{t("common.reset")}</button>
        <button type="submit">{t("buttons.sendMessage")}</button>
      </div>
    </form>
  );
};

export default ContactForm;

// Helper Functions
function resetForm(e, setPhone) {
  e.target.reset();
  setPhone("");
}

function handleMobileOnChange(e, setPhone) {
  const isNumber = !isNaN(parseInt(e.nativeEvent.data));
  if (isNumber || e.nativeEvent.data === null) {
    setPhone(e.target.value);
  }
}

function showSentMsgAlert(dispatch, t) {
  dispatch(
    showAlert({
      alertText: t("toastAlert.messageSent"),
      alertState: "success",
      alertType: "alert",
    })
  );
}
