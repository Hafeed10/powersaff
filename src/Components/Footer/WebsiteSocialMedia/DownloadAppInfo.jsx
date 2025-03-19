import { useTranslation } from "react-i18next";
import { appStore, googlePlay } from "src/Assets/Images/Images";
import { mySocialMedia } from "src/Data/staticData";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./DownloadAppInfo.module.scss";
import qrCode from "src/Assets/Images/qr-code.png";

const DownloadAppInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <b>{t("footer.section5.downloadApp")}</b>
      <p>{t("footer.section5.saveThreeDollars")}</p>

      <div className={s.appInfo}>
        <div className={s.qrCode}>
          <img
            src={qrCode}
            alt={t("footer.section5.qrCodeAlt")}
            title="QR code"
            tabIndex="0"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={s.downloadButtons}>
          <button type="button" aria-label={t("footer.section5.googlePlayAlt")}>
            <img
              src={googlePlay}
              alt={t("footer.section5.googlePlayAlt")}
              loading="lazy"
              decoding="async"
            />
          </button>

          <button type="button" aria-label={t("footer.section5.appStoreAlt")}>
            <img
              src={appStore}
              alt={t("footer.section5.appStoreAlt")}
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </div>

      <div className={s.socialMedia}>
        {mySocialMedia.map((item) => {
          const nameTrans = t(`common.${item.name.toLowerCase()}`);

          return (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={nameTrans}
              key={item.id}
            >
              <SvgIcon name={item.icon} />
              <ToolTip left="50%" top="48px" content={nameTrans} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default DownloadAppInfo;
