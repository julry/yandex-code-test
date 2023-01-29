const GOOGLE_FORM_EMAIl_ID = 'entry.787520719';
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxT8ngFQ7Qs7woijuHM4_Zcua-NW9IS9g8Tz7V4u1CuNLSZA/formResponse';

export const sendDataToForms = ({mail}) => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_EMAIl_ID, mail);
    const myInit = {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    };
    const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);
    return fetch(myRequest).then(response => {
        return response
    }).catch(e => {
        return;
    })
};