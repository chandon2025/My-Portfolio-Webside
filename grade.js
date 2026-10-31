const input = document.getElementById("mark");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

function  getGrade(m) {
  if (m >= 80) return { g: "A+", pass: true, msg: "Outstanding!" };
  if (m >= 70) return { g: "A", pass: true, msg: "Excellent!" };
  if (m >= 60) return { g: "B", pass: true, msg: "Good job!" };
  if (m >= 50) return { g: "C", pass: true, msg: "Satisfactory!" };
  if (m >= 33) return { g: "D", pass: true, msg: "Pass!" };
  return { g: "F", pass: false, msg: "Fail — needs more effort." };
}

 btn.addEventListener("click", () => {
  const val = input.value.trim();
  const m = Number(val);

  if (val === "" || Number.isNaN(m) || m < 0 || m > 100) {
    out.className = "result fail";
    out.textContent = "Please enter a valid mark between 0 and 100.";
    return;
  }

  const r = getGrade(m);
  out.className = "result " + (r.pass ? "pass" : "fail");
  out.textContent = `Grade: ${r.g} (${r.msg})`;
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
