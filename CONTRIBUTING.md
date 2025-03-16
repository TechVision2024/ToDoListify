## Index:
- [Description](#description)
- [File Structure](#file-structure)
- [Pull-Request Guidelines](#pull-request-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Standard Issue Forms](#standard-issue-forms)


## Description:
This file describes file structure, branch structure, the guidelines for the
pull request, commit guidelines and the standard issue forms.

## File Structure:
The project file structure description.
The files/folders will be in this structure:
- `backend`:
    - This folder contains the backend files and folders + the backend documentation.
    - Anyone who modifies it must have backend developer privileges.
    - If the modification is made by anyone else, the modifications will be rejected
    completely, even if the modifications are very simple.
- `frontend`: 
    - This folder contains the frontend files and folders + the frontend documentation.
    - Anyone who modifies it must have frontend developer privileges.
    - If the modification is made by anyone else, the modifications will be rejected
    completely, even if the modifications are very simple.
- `database`:
    - This folder contains the database files and folders + the database documentation.
    - Anyone who modifies it must have database developer privileges.
    - If the modification is made by anyone else, the modifications will be rejected
    completely, even if the modifications are very simple.
- `ux-ui`:
    - This folder contains the ux/ui files and folders + the ux/ui documentation.
    - Anyone who modifies it must have ux/ui developer privileges.
    - If the modification is made by anyone else, the modifications will be rejected
    completely, even if the modifications are very simple.

## Branches Structure:
To make the project clean, track task clearly, and avoid the modifications that 
may affect the project as a whole, we distributed the branches in this structure:
- `main` branch:
    - This branch is the main branch that contains the stable version of the project,
    the error-free version, the version that contains the full and usable features.
    - This branch is updated by the development team administrator, as he is the only
    person who can update it.
    - If anyone sends a pull request to this branch, the request will be rejected permanently.
- `develop` branch:
    - This branch is the main branch for the development process, adding features, fixing errors, etc..
    - In this branch, all developers can send their modifications to it, each according to his
    permissions and task.
    - This branch contains several other branches, each according to the task or fix that the developer
    is doing, for example:
        - `feature/frontend/login-page`: It means `<type-of-task>/<team>/<task-title>`.
        - `feature/backend/register-api`.
        - `fix/frontend/submit-button-login-page`.
        - `fix/backend/login-response`.
        - `feature/database/users-table`.
        - `fix/database/users-report-mechanism`.
- After understanding the branches structure, I must point out some very important points:
    - You have to fork the project, forking all the branches, not just the main.
    - You have to send your work and branch as a pull-request from your branch to the develop branch:
        - pull-request from `feature/frontend/login-page` to `develop`.
    - After sending the pull-request, do NOT merge it by yourself, wait for it to be reviewed by the
    reviewers.
    - Do NOT merge your work and branch in your fork version and send it to the repo, it will NOT be 
    merged and it will be closed.
    - You must literally follow the branch structure.

## Pull-Request Guidelines:
You need to fork the project into your account to be able to send a pull-request.
After you take a copy from the project to your account now, you can use the previous
Branches Structure. After everything is fine in your branches and there are no issues
and you are ready to make a pull-request, you must follow these points:
- The merge must be from your branch to the develop branch.
- The pull-request title should be clear and describe the work you have done.
- The pull-request body should describe all the work you have done clearly and in detail.
- After sending the pull-request, do NOT merged it by yourself, wait for it to be reviewed by the
reviewers.
- Do NOT merge your work and branch in your fork version and send it to the repo, it will NOT be 
merge and it will be closed and deleted.
- If you encounter any problem, please contact the development team administrator.

## Commit Guidelines:
When you commit your work, you should pay attention to clarity, precision, and completeness.
Try as much as possible to include a commit for each part of the task to make it easier to 
track your work.

## Standard Issue Forms:
We create these forms to make it easier for us to respond to problems and quick requests.
These forms meet the project's needs in all aspects, including ease of reading, ease of
response, and clarity of the idea or problem.
As someone who has a new idea or a problem in the project, you must follow these forms:
- `Bug Report`
```
### Issue Description:

### Steps to Reproduce the Issue:
    1.
    2.
    3.
### Expected Behavior:

### Screenshot (if any):

### Related Links (if any):

### Additional Notes:

```
- `Feature Request`
```
### Feature Description:

### Benefits:

### Featured Implementation Steps (suggested):

### Additional Notes:

```
- `Enhancement`
```
### Feature That Needs Improvement:

### Enhancement suggestion:

### Benefits:

### Additional Notes:

```
- `documentation Issue`
```
### Issue Description:

### Enhancement suggestion:

### Additional Notes:
```