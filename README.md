# Innovation Readiness Level (IRL) Assessment Tool

A web-based assessment tool for evaluating innovation readiness across six key dimensions, based on the framework developed by KTH Royal Institute of Technology.

## Overview

The Innovation Readiness Level (IRL) Assessment Tool helps startups and innovators evaluate their readiness across six critical dimensions:

- **CRL** - Customer Readiness Level: How well the problem, customers, and value proposition are defined and validated
- **TRL** - Technology Readiness Level: How mature and validated the core technology or solution is
- **BRL** - Business Readiness Level: How clear and workable the business model and go-to-market are
- **IPRL** - IP Readiness Level: How thought-through IP protection and freedom-to-operate are
- **TMRL** - Team Readiness Level: How capable and aligned the core team is
- **FRL** - Funding Readiness Level: How ready the startup is to secure and manage funding

Each dimension is assessed on a scale from Level 1 (initial/limited) to Level 9 (mature/scalable), with detailed indicators and descriptions for each level.

## Features

- **Interactive Assessment**: Select readiness levels for each of the six dimensions
- **Live Visualization**: Real-time radar chart showing your readiness profile
- **Bottleneck Identification**: Automatically identifies the dimension with the lowest readiness level
- **Recommended Focus**: Provides actionable recommendations based on the next level indicators for the bottleneck dimension
- **Summary Report**: Generate and copy a summary report with key findings and recommendations
- **Date Tracking**: Record assessment dates for tracking progress over time

## Technologies

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **TanStack Query** - Data fetching and state management

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or bun

### Installation

1. Clone the repository:
git clone <YOUR_GIT_URL>
cd irl-kth2. Install dependencies:ash
npm install
# or
bun install
3. Start the development server:
npm run dev
# or
bun dev4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

npm run build
# or
bun run buildThe production build will be in the `dist` directory.

## Usage

1. **Set Assessment Date**: Select the date for your assessment
2. **Assess Each Dimension**: For each of the six dimensions, select the level that best describes your current state
3. **View Live Progress**: As you make selections, a radar chart updates in real-time
4. **Generate Report**: Once all dimensions are assessed, click "Generate Summary Report"
5. **Review Results**: The report will show:
   - Your overall readiness profile
   - The bottleneck dimension (lowest level)
   - Recommended focus areas from the next level indicators
6. **Copy Report**: Use the copy button to save your assessment summary

## License

This project is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).

**Source**: [kthinnovationreadinesslevel.com](https://kthinnovationreadinesslevel.com)

**Note**: "Innovation Readiness Level" and "IRL" are trademarks of KTH Royal Institute of Technology.

## Project Structure

```
src/
├── components/
