// ��� ���� ������ ����� ���� ��������

// ���� ������� �� ������
const searchInput = document.getElementById("search");
const articles = document.querySelectorAll(".article");

// ��� �������� ���� �� ���� �����
searchInput.addEventListener("keyup", function() {
  const query = this.value.toLowerCase(); // ������ ���� ����� ��������
  articles.forEach(article => {
    const text = article.innerText.toLowerCase(); // ����� ������
    // �� ������ ���� ����� ������ �� ������ ? ���� ������
    if (text.includes(query)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
});
