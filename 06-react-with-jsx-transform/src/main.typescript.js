import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';
function Avatar(_a) {
    var name = _a.name, photo = _a.photo, _b = _a.status, status = _b === void 0 ? 'offline' : _b, _c = _a.size, size = _c === void 0 ? 64 : _c;
    var iconPath = '';
    var statusMessage = '';
    switch (status) {
        default:
        case 'offline':
            iconPath = '/icons/status-offline.svg';
            statusMessage = '오프라인';
            break;
        case 'online':
            iconPath = '/icons/status-online.svg';
            statusMessage = '온라인';
            break;
        case 'dont-disturb':
            iconPath = '/icons/status-dont-disturb.svg';
            statusMessage = '방해금지';
            break;
        case 'away':
            iconPath = '/icons/status-away.svg';
            statusMessage = '자리비움';
            break;
    }
    var label = "".concat(name, " (").concat(statusMessage, ")");
    return (React.createElement("figure", { className: "Avatar", "aria-label": label, title: label },
        React.createElement("img", { src: "/faces/".concat(photo), alt: name, width: size, height: size }),
        React.createElement("figcaption", null,
            React.createElement("img", { src: iconPath, alt: "" }))));
}
function AvatarListPage() {
    return (React.createElement("ul", { className: "AvatarList" },
        React.createElement("li", null,
            React.createElement(Avatar, { name: "\uC57C\uBB34", photo: "man-02.jpg", status: "online" })),
        React.createElement("li", null,
            React.createElement(Avatar, { name: "\uBC94\uC324", photo: "man-04.jpg", status: "away" })),
        React.createElement("li", null,
            React.createElement(Avatar, { name: "\uC8FC\uC6D0", photo: "woman-04.jpg", status: "dont-disturb" })),
        React.createElement("li", null,
            React.createElement(Avatar, { name: "\uC815\uBBFC", photo: "woman-01.jpg" })),
        React.createElement("li", null,
            React.createElement(Avatar, { name: "\uC815\uBBFC", photo: "woman-01.jpg" }))));
}
var container = document.getElementById('react-app');
if (container) {
    createRoot(container).render(React.createElement(AvatarListPage, null));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
