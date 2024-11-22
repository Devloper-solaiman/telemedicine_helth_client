import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import TryIcon from "@mui/icons-material/Try";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import MedicationIcon from "@mui/icons-material/Medication";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
       title: 'Profile',
       path: `${role}/profile`,
       icon: PersonIcon,
    },
    {
       title: 'Change Password',
       path: `change-password`,
       icon: KeyIcon,
    },
 ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: TryIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: ScheduleSendIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: ScheduleSendIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: BookOnlineIcon,
        },
        {
          title: "My Profile",
          path: `${role}/profile`,
          icon: AccountCircleIcon,
        },
      );
      break;

    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}`,
          icon: BookOnlineIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: MedicationIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: PaymentIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
