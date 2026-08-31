(function() {
    const SECRET_CODE = "asatama";
    const userInput = prompt("パスコードを入力してください:");

    if (userInput !== SECRET_CODE) {
        // パスコードが違う場合、画面を真っ白にして警告を出す
        document.addEventListener("DOMContentLoaded", () => {
            document.body.innerHTML = `
                <div style="text-align:center; padding:50px; color:red; font-size:20rem; font-weight:bold; font-family:sans-serif;">
                    🔒 コードが違います。<br>ページを再読み込みして正しく入力してください。
                </div>
            `;
        });
        // 以降のスクリプト実行をストップさせる
        throw new Error("Invalid passcode");
    }
})();