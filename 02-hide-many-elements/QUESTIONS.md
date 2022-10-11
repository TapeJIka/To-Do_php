# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Es izmantoju querySelectorAll (), lai iegūtu visus elementus ar '.hide_me " klase. Šī funkcija iet caur katru bērnu objektu elementa, ka tas tika piešķirts, un atgriež katru elementu, kas satur norādīto selektoru kā sarakstu.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Lai paslēptu katru elementu, ko es izmantoju ForEach (), kas ļāva man sagatavot funkciju katrā no saraksta elementiem, ko atdeva querySelectorAll()