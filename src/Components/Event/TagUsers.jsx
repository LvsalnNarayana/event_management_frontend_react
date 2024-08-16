/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import React, { useMemo, useState } from "react";
/* eslint-disable max-lines */

import {
  Chip,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";

import UserAvatar from "../Shared/UserAvatar";

const TagUsers = ({ addGuest }) => {
  const [selectedFriends, setSelectedFriends] = useState([]);
  const friends = useMemo(() => {
    return [
      {
        id: "user_1235",
        lastname: "Smith",
        firstname: "Jane",
        username: "jane_smith",
        mutual_friends_count: 10,
        friendship_status: "friends",
        profile_picture: "https://example.com/profile2.jpg",
      },
      {
        id: "user_1236",
        firstname: "John",
        lastname: "Johnson",
        mutual_friends_count: 8,
        username: "john_johnson",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile3.jpg",
      },
      {
        id: "user_1237",
        firstname: "Emily",
        lastname: "Williams",
        mutual_friends_count: 12,
        username: "emily_williams",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile4.jpg",
      },
      {
        id: "user_1238",
        lastname: "Brown",
        firstname: "Michael",
        mutual_friends_count: 5,
        username: "michael_brown",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile5.jpg",
      },
      {
        id: "user_1239",
        lastname: "Jones",
        firstname: "Sarah",
        username: "sarah_jones",
        mutual_friends_count: 7,
        friendship_status: "friends",
        profile_picture: "https://example.com/profile6.jpg",
      },
      {
        id: "user_1240",
        lastname: "Garcia",
        firstname: "David",
        mutual_friends_count: 9,
        username: "david_garcia",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile7.jpg",
      },
      {
        id: "user_1241",
        firstname: "Laura",
        lastname: "Martinez",
        mutual_friends_count: 11,
        username: "laura_martinez",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile8.jpg",
      },
      {
        id: "user_1242",
        lastname: "Davis",
        firstname: "James",
        username: "james_davis",
        mutual_friends_count: 6,
        friendship_status: "friends",
        profile_picture: "https://example.com/profile9.jpg",
      },
      {
        id: "user_1243",
        firstname: "Anna",
        lastname: "Rodriguez",
        mutual_friends_count: 10,
        username: "anna_rodriguez",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile10.jpg",
      },
      {
        id: "user_1244",
        firstname: "Carlos",
        lastname: "Martinez",
        mutual_friends_count: 13,
        username: "carlos_martinez",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile11.jpg",
      },
      {
        id: "user_1245",
        lastname: "Lopez",
        firstname: "Sophia",
        mutual_friends_count: 4,
        username: "sophia_lopez",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile12.jpg",
      },
      {
        id: "user_1246",
        firstname: "Daniel",
        lastname: "Gonzalez",
        mutual_friends_count: 14,
        username: "daniel_gonzalez",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile13.jpg",
      },
      {
        id: "user_1247",
        lastname: "Wilson",
        firstname: "Olivia",
        mutual_friends_count: 6,
        username: "olivia_wilson",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile14.jpg",
      },
      {
        id: "user_1248",
        lastname: "Anderson",
        firstname: "William",
        mutual_friends_count: 10,
        username: "william_anderson",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile15.jpg",
      },
      {
        id: "user_1249",
        firstname: "Emma",
        lastname: "Thomas",
        username: "emma_thomas",
        mutual_friends_count: 7,
        friendship_status: "friends",
        profile_picture: "https://example.com/profile16.jpg",
      },
      {
        id: "user_1250",
        lastname: "Taylor",
        firstname: "Ethan",
        mutual_friends_count: 8,
        username: "ethan_taylor",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile17.jpg",
      },
      {
        id: "user_1251",
        firstname: "Mia",
        lastname: "Moore",
        username: "mia_moore",
        mutual_friends_count: 5,
        friendship_status: "friends",
        profile_picture: "https://example.com/profile18.jpg",
      },
      {
        id: "user_1252",
        firstname: "Ava",
        lastname: "Jackson",
        username: "ava_jackson",
        mutual_friends_count: 9,
        friendship_status: "friends",
        profile_picture: "https://example.com/profile19.jpg",
      },
      {
        id: "user_1253",
        lastname: "Martin",
        firstname: "Alexander",
        mutual_friends_count: 11,
        username: "alexander_martin",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile20.jpg",
      },
      {
        id: "user_1254",
        lastname: "Lee",
        firstname: "Isabella",
        mutual_friends_count: 6,
        username: "isabella_lee",
        friendship_status: "friends",
        profile_picture: "https://example.com/profile21.jpg",
      },
    ];
  }, []);

  return (
    <Autocomplete
      multiple
      size="small"
      disablePortal
      id="add_user_event"
      options={friends}
      limitTags={3}
      fullWidth
      filterSelectedOptions
      blurOnSelect
      value={selectedFriends || []}
      onChange={(event, newValue) => {
        // setSelectedFriends(newValue);
        addGuest(newValue[0]);
      }}
      getOptionLabel={(option) => {
        return option?.username;
      }}
      isOptionEqualToValue={(option, value) => {
        return option?.id === value?.id;
      }}
      defaultValue={selectedFriends || []}
      sx={{ width: "100%" }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            placeholder={
              selectedFriends?.length > 0 ? "" : "Search your friends"
            }
          />
        );
      }}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });

          return (
            <Chip
              variant="outlined"
              label={
                <Stack
                  gap={1}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <UserAvatar username={option?.username} width={24} />
                  <Typography variant="body1" sx={{ fontSize: "14px" }}>
                    {option?.firstname} {option?.lastname}
                  </Typography>
                </Stack>
              }
              key={key}
              {...tagProps}
            />
          );
        });
      }}
      renderOption={({ id, key, ...props }, option) => {
        return (
          <li key={option?.id} {...props} style={{ marginTop: "5px" }}>
            <Stack
              gap={1}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <UserAvatar username={option?.username} width={30} />
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  {option?.firstname} {option?.lastname}
                </Typography>
              </Stack>
            </Stack>
          </li>
        );
      }}
      PaperComponent={({ children }) => {
        return (
          <Stack
            sx={{
              p: 0,
              mt: 1,
              width: "100%",
              overflowY: "auto",
              maxHeight: "300px",
              borderRadius: "4px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              "& .MuiAutocomplete-listbox": {
                maxHeight: "500px",
              },
            }}
          >
            {children}
          </Stack>
        );
      }}
    />
  );
};

export default TagUsers;
