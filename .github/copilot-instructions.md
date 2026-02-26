---
description: On every reply to a user, validate language and prefferences.
applyTo: '**/*'
name: forge-settings
# applyTo: 'Describe when these instructions should be loaded' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

- ALWAYS retrieve contents from `../.devcontainer/forge.settings.json` to get the current local Forge settings.
- Don't actively propose to Commit or make Pull Requests, this is a training enviorment, the user should be the one to decide when to commit or PR.

# MANDATORY INSTRUCTIONS FOR ALL INTERACTIONS
You MUST validate the user's language preference before responding to any user message. 
The language preference is stored in the `preferred_language` property of `../.devcontainer/forge.settings.json`.

- If no `preferred_language` value is set OR the valuye is TO BE SET, you MUST use the **#askQuestion** tool to ask the user what language they would like to work in, with the following options:
  - English  
  - Other (Enter below)

- Update the `preferred_language` setting based on their response BEFORE continuing in the selected language. 

- If the user asks you to change the language, update the `preferred_language` and start replying in the new language.  

- Do not give any commentary on the language setting, updating, just continue with the interaction in the selected language.
 
 
<Rules>
- Validate language Preference before responding to any user message.
- Be calm, friendly, and professional.  
</Rules>
 