Технічне завдання:

1. The task is to develop the page that will contain table with cars list. Table should contain listed columns. Table should use pagination locally. Search on top of the table should work accross all entries, not only listed page.
     - Company
     - Model
     - VIN
     - Color
     - Year
     - Price
     - Availability
     - Actions columns

2. Actions column should contain dropdown with listed actions. Each option should open respected modal window.
     - Edit
     - Delete

3. Edit modal should contain all data for selected car, but only some fields should be editable
     - Disabled:
       - Company
       - Model
       - VIN
       - Year
     - Enabled:
       - Color
       - Price
       - Availability

4. Delete modal should contain question is user sure he wants to perform this action.

5. Page should contain "Add car" button that opens add modal. Add modal should be similar to Edit modal, but all fields enabled and empty by default

6. All user actions should affect the table. Data should be saved between page reloads (якщо локал пустий, фетчу)

7. API to get initial data - https://documenter.getpostman.com/view/5596891/SW7eyRFV?version=latest#d10a962e-a3de-4c0e-9fda-7d472c20ba24
8. Requirements to task:
     - 1 week to complete (5 working days)
     - Finished task should be presented in github
     - There should be accessible deployed version of the task to view it
     - Task could be done using Vanilla JS or React (React is preferred but not mandatory)
