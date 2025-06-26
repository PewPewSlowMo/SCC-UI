#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

## user_problem_statement: "Создание современной системы аналитики для колл-центра с красивым frontend на основе 3-го варианта дизайна (темная/светлая тема)"

## frontend:
  - task: "Установка зависимостей для графиков и иконок"
    implemented: false
    working: "NA"
    file: "package.json"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Планируется установка Chart.js/Recharts, react-router-dom, react-icons"

  - task: "Создание системы тем (светлая/темная)"
    implemented: false
    working: "NA"
    file: "src/contexts/ThemeContext.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Нужно создать ThemeProvider с переключением тем"

  - task: "Компонент Sidebar с навигацией"
    implemented: false
    working: "NA"
    file: "src/components/Sidebar.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Боковая панель с меню и переключателем темы"

  - task: "Dashboard - главная страница"
    implemented: false
    working: "NA"
    file: "src/pages/Dashboard.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Карточки метрик, графики, таблица операторов"

  - task: "Страница отчетов по операторам"
    implemented: false
    working: "NA"
    file: "src/pages/Operators.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Фильтры, таблица с детальной статистикой операторов"

  - task: "Страница отчетов по очередям"
    implemented: false
    working: "NA"
    file: "src/pages/Queues.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Статистика по очередям звонков"

  - task: "Страница пропущенных звонков"
    implemented: false
    working: "NA"
    file: "src/pages/MissedCalls.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Список пропущенных звонков с фильтрами"

  - task: "Страница аналитики"
    implemented: false
    working: "NA"
    file: "src/pages/Analytics.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Дополнительные графики и аналитика"

  - task: "Настройки"
    implemented: false
    working: "NA"
    file: "src/pages/Settings.js"
    stuck_count: 0
    priority: "low"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Настройки профиля и системы"

## backend:
  - task: "Базовый FastAPI сервер"
    implemented: true
    working: true
    file: "server.py"
    stuck_count: 0
    priority: "low"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Базовый сервер уже работает, возможно потребуется расширение API"

## metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 0
  run_ui: false

## test_plan:
  current_focus:
    - "Установка зависимостей для графиков и иконок"
    - "Создание системы тем (светлая/темная)"
    - "Компонент Sidebar с навигацией"
    - "Dashboard - главная страница"
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

## agent_communication:
  - agent: "main"
    message: "Начинаю реализацию фронтенда на основе 3-го варианта дизайна (темная тема) с возможностью переключения на светлую тему. План: установка зависимостей, создание системы тем, компонентов и всех страниц."