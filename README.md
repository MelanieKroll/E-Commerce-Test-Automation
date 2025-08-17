# E-Commerce-Test-Automation
Ein End-to-End-Testautomatisierungsprojekt für eine E-Commerce-Website, das Page Object Model, API-Tests, Visual Regression und CI/CD demonstriert.

---

## 🚀 Getestete Workflows

Die Testsuite deckt die folgenden kritischen Benutzer-Workflows ab:

1.  **Homepage-Test:** Überprüfung der grundlegenden Seitenelemente und Navigation.
2.  **Benutzerregistrierung & Login:** Ein vollständiger End-to-End-Test der Benutzerregistrierung und des Logins mit dynamisch generierten Testdaten.
3.  **Warenkorb-Funktionalität:** Hinzufügen von Produkten zum Warenkorb und Überprüfung der korrekten Artikel.

---

## 🛠️ Technische Details und Best Practices

### **Problem 1: Nicht anklickbare Elemente**
**Fehler:** Bei der Automatisierung des "Add to cart"-Buttons trat ein Fehler auf, der besagte, dass das Element von einem anderen Element verdeckt wird.

**Lösung & Begründung:**
Einige Elemente waren wegen eines schnellen Hover-Effekts nicht anklickbar. Statt die Sicherheitsüberprüfung mit `{force: true}` zu umgehen, wurde ein **`cy.wait(500)`**-Befehl eingefügt. Dies ist eine professionellere Lösung, da sie das tatsächliche Timing-Problem der Benutzeroberfläche behebt, ohne die Fehlermeldung zu ignorieren.

### **Problem 2: Temporäre E-Mail-Adressen für Tests**
**Lösung & Begründung:**
Um eine wiederholbare und skalierbare Testumgebung zu schaffen, wurde eine Hilfsfunktion (`generateRandomEmail()`) verwendet, um bei jedem Testlauf eine einzigartige E-Mail-Adresse zu generieren. Dies ist eine Best Practice, da es die Abhängigkeit von manuellen Konten eliminiert und die Tests zuverlässiger macht.

---

## 📂 Projektstruktur

* **`cypress/e2e/`**: Enthält die Test-Spezifikationen (`.cy.js`-Dateien) für jeden Workflow.
* **`cypress/page-objects/`**: Enthält die Page Objects, die eine saubere und wartbare Testautomatisierungsstruktur bieten.
* **`cypress/support/utils.js`**: Enthält wiederverwendbare Hilfsfunktionen wie `generateRandomEmail()`.

---

## ▶️ Wie man die Tests ausführt

1.  Stelle sicher, dass alle Node.js-Abhängigkeiten installiert sind: `npm install`.
2.  Öffne den Cypress Test Runner: `npx cypress open`.
3.  Wähle den gewünschten Test aus der Liste, um ihn auszuführen.
