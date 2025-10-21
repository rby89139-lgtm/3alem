// ßæÏ ÈÓíØ áÊİÚíá ÇáÈÍË ÏÇÎá ÇáãŞÇáÇÊ

// äÍÏÏ ÇáÚäÇÕÑ ãä ÇáÕİÍÉ
const searchInput = document.getElementById("search");
const articles = document.querySelectorAll(".article");

// áãÇ ÇáãÓÊÎÏã íßÊÈ İí ãÑÈÚ ÇáÈÍË
searchInput.addEventListener("keyup", function() {
  const query = this.value.toLowerCase(); // ÇáßáãÉ Çááí ßÊÈåÇ ÇáãÓÊÎÏã
  articles.forEach(article => {
    const text = article.innerText.toLowerCase(); // ãÍÊæì ÇáãŞÇá
    // áæ ÇáßáãÉ Çááí ßÊÈåÇ ãæÌæÏÉ İí ÇáãŞÇá ? íÙåÑ ÇáãŞÇá
    if (text.includes(query)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
});
