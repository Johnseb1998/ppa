# Registration & Login Specification: Healing Mind

## 1. Authentication System
### Client Login
- Fields: Mobile Number, Password, OTP.
- Workflow: Secure access for existing patients.

### Therapist Login
- Fields: Therapist ID, Password, OTP, 4-digit Passkey.
- Workflow: Higher security for clinical staff.

### Admin Login
- Fields: Admin ID, Password, OTP, 6-digit Passkey.
- Workflow: Maximum security for practice oversight.

## 2. New User Registration Flow (Multi-Step)
### Step 0: Consent
- Digital consent form signature before starting registration.

### Step 1: Profile Creation
- Fields: Name, DOB, Sex, Gender, Address (City, District, State), Email, Password, Job, Phone Number + OTP verification.
- Outcome: Create unique profile ID.

### Step 2: Social & Family Context
- Fields: Residential Type (City/Village), Family Size, Marital Status.
- Bystander Info: Name and contact details.

### Step 3: Health History (Clinical Intake)
- Chronic Conditions (Checkboxes): BP, Diabetes, Cholesterol, Thyroid.
- Major Events: Surgery, Brain Injury, Epilepsy/Seizures.
- Gender-Specific: Period cycles, PCOD, PMS (if female).
- Hereditary: Genetic illness history, Mental illness history.

## 3. Account Recovery
- Forgot Password: Reset via Phone Number + 2-factor verification (DOB, Gender, or Unique ID).

## 4. Persistent Elements
- 'Booking' Tab: Dynamic floating button on the right-hand center of every page.
- Post-Login: Immediate access to Booking and Psychometric Tests.