## Clone the repository, then navigate to the project folder, install dependencies, and start the application:

`cd <path-to-GraphViz-front-eng> && npm install && npm start`

---

## CSV Format Requirements

### Event Log Structure

Your event log CSV must include the following mandatory columns:
- `student` - Student identifier
- `source` - Source event name
- `target` - Target event name

Optional columns like `timestamp` can be added as needed.

**Example of a valid event log:**

| student | source | target | timestamp |
|---------|--------|--------|-----------|
| Ivan I. | Test_1 pass | Test_2 fail | 19.04.2024 |
| Ivan I. | Test_2 fail | Test_3 pass | 19.04.2024 |
| Ivan I. | Test_3 pass | Test_4 pass | 21.04.2024 |
| Boris B. | Test_1 fail | Test_2 pass | 21.04.2024 |

### Vertices Order Structure

The vertices file defines the hierarchical structure of events in your Sankey diagram.

**Example:**

| Column 1 | Column 2 | Column 3 | Column 4 |
|----------|----------|----------|----------|
| pass     | fail     | pass     | pass     |
| fail     | pass     | fail     | fail     |

### Event Naming Convention

Each event name must follow this pattern: `{column_name} {vertex_name}`

For example: `Test_1 pass` = Column `Test_1` + Vertex `pass`

This ensures proper mapping between your event log and the Sankey diagram structure.
