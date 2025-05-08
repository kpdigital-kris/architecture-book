
---
id: operating-model-delivery-engagement
title: Operating Model and Delivery Framework Engagement
slug: /security-architecture-playbook/operating-model-delivery-engagement
sidebar_position: 6
description: Detailed breakdown of Security Architecture's role during different delivery phases.
tags: [security, delivery, framework, engagement]
---

# Operating Model and Delivery Framework Engagement

## 1. Purpose of this Chapter

This chapter defines how Security Architecture and Cyber Security should operate together within the organisation’s project delivery lifecycle. It provides clear distinctions of roles and introduces an aligned RACI.

## 2. Security Architecture's Role in Delivery

Security Architecture ensures secure-by-design practices by engaging in the earliest phases of projects to shape solution options, define risk-aligned controls, and produce architecture deliverables.

## 3. Clear Separation of Responsibilities

| Security Architecture (Enterprise) | Cyber Security (Operational) |
|------------------------------------|-------------------------------|
| Accountable for design             | Accountable for implementation |
| Owns patterns and threat models    | Owns controls and governance   |
| Designs to risk and strategy       | Operates and enforces controls |

## 4. How the Teams Collaborate

Security Architecture defines the design; Cyber implements and validates it. Both contribute to risk assessments, with a clear separation to maintain objectivity and enforce quality.

## 5. Alignment to the Delivery Framework

| Phase     | Security Architecture | Cyber Security |
|-----------|------------------------|----------------|
| Ideate    | Review business needs, define early risks | Input on feasibility |
| Define    | Lead threat modelling, define patterns    | Estimate SOC, IAM needs |
| Design    | Create detailed security design           | Plan implementation |
| Deliver   | Support clarifications                    | Implement controls, test security |
| Transition| Validate operational readiness            | Lead transition to BAU |
| Sustain   | Review feedback, update patterns          | Monitor and maintain controls |

## 6. Refined RACI – Define & Design Phases

| Phase  | Activity                          | Enterprise Security Architect | Cyber Security | Notes |
|--------|-----------------------------------|-------------------------------|----------------|-------|
| Define | Current State Security Analysis   | A                             | C              |      |
| Define | Target State Security Design      | A                             | C              |      |
| Define | Business Requirements (Security)  | A                             | C              |      |
| Define | RFP Security Contribution         | R                             | C              |      |
| Define | Vendor Security Assessment        | R                             | C              |      |
| Define | Security Option Analysis          | A                             | C              |      |
| Define | Threat Modelling                  | A, R                          | C              |      |
| Define | High-Level Security Design        | A, R                          | C              |      |
| Define | Security Pattern Creation         | A, R                          | S              |      |
| Design | Security Requirements Definition  | A, R                          | C              |      |
| Design | Detailed Security Design          | A, R                          | C              |      |
| Design | Embed Security in Design          | A, R                          | C              |      |
| Design | Security Delivery Planning Input  | C                             | R              |      |

## 7. Practical Example – Technology Modernisation

**Scenario:**  
A legacy retail system is moving to a microservices-based cloud solution.

**Enterprise Security Architect:**
- Leads threat modelling on cloud IAM, APIs, and encryption
- Defines reusable controls and reference architecture
- Produces detailed security design artefacts

**Cyber Security:**
- Implements IAM federation, secrets management, WAFs
- Validates through security testing
- Supports transition and maintains controls in production
