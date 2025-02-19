// Function to create UI for user List ....................


// User Data for dynamic addition of users in user list...........................
const usersData = [
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
    name: "John Mayers",
    time: "3 min ago",
    status: "Accountant",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
    name: "Tony Stark",
    time: "10 min ago",
    status: "Genius, Billionaire, Playboy, Philanthropist",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
    name: "S. Johansson",
    time: "3 hours ago",
    status: "Black Widow",
  },
  {
    avatar:
      "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
    name: "Jeremy Renner",
    time: "4 hours ago",
    status: "Hawkeye",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
    name: "Anthony Mackie",
    time: "8 hours ago",
    status: "Falcon",
  },
  {
    avatar:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
    name: "Chris Evans",
    time: "22 hours ago",
    status: "Captain America",
  },
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
    name: "Chris Hemswoth",
    time: "1 day ago",
    status: "Thor the god of thunder",
  },
  {
    avatar: "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
    name: "Mark Ruffalo",
    time: "Dec 10",
    status: "The Incrdible Hulk",
  },
  {
    avatar:
      "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
    name: "Tom Hiddleston",
    time: "Dec 8",
    status: "Loki",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
    name: "Don Cheadle",
    time: "Dec 6",
    status: "Rhodey",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
    name: "Stan Lee",
    time: "Dec 4",
    status: "The Big Daddy",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
    name: "S.L. Jackson",
    time: "Dec 2",
    status: "Shield",
  },
];

// Json data ...........................................
const JsonData = {
  chat1: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "john.mayers@gmail.com",
      },
    },   
  ],
  chat2: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "tony.stark@gmail.com",
      },
    },    
  ],
  
};


function createUserList({ avatar, name, time }, index) {
  const newuser = document.createElement("div");
  if (index === 0) {
    newuser.classList.add("user-list");
    newuser.classList.add("active");
  } else {
    newuser.classList.add("user-list");
  }
  newuser.innerHTML = `
  <div class="user-list-sub" onclick="checkScreen(this,${index})">
    
    <div class="avatar">
      <img
        src=${avatar}
        alt=${name}
        loading="lazy"
      />
    </div>
    <div class="profile-highlight">
      <div class="user-name">
        <p class="title">${name}</p>
        <p class="time">${time}</p>
      </div>
      <p class="highlights">
        Lorem, ipsum dolor sit amet consectetur...
      </p>
    </div>
  </div>`;
  document.querySelector(".userList").appendChild(newuser);
}
function setList(arr) {
  arr.map((item, index) => createUserList(item, index));
}
setList(usersData);
// usersData.map((item,index)=>createUserList(item,index))

//  Function to change chat Data based on click...............................
function checkScreen(element, index) {
  if (window.innerWidth <= 750) {
    document.querySelector(".left").style.display = "none";
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").style.width = "100%";
  }
  currentUser(element, index);
}
// Function for getting Data for selected User .......................
function currentUser(element, index) {
  const userList = document.querySelectorAll(".user-list");
  userList.forEach((element) => element.classList.remove("active"));
  element.parentElement.classList.add("active");
  const name = element.children[1].children[0].children[0].innerHTML;
  const currentUserData = usersData.filter((item) => item.name === name);
  let selectedChat=undefined;
  Object.keys(JsonData).forEach((element,i) => {
    if(+element.charAt(element.length-1)==index+1){
      selectedChat=Object.values(JsonData)[i]
    }
  });
  UpdateChat(currentUserData, selectedChat);
}
// Function for Updating Data for selected User .......................
function UpdateChat([{ avatar, name, status }], chat) {
  const current_user = document.createElement("div");
  current_user.classList.add("current-user");
  current_user.innerHTML = `
      <div class="current-user-sub">
      <div class="current_avatar">
       <span>
       <img
        src=${avatar}
        alt=${name}
      />
      <div class="online"></div>
       </span>
    </div>
      <div class="current_status">
        <p class="current-title">${name}</p>
        <p class="current-highlights">${status}</p>
      </div>
    </div>`;
    // console.log(current_user);
    document.querySelector(".chat-box").innerHTML = "";
    document.querySelector(".chat-box").appendChild(current_user);
    AddChat(chat)
}

function AddChat(chat) {
  if (chat !== undefined) {
    const chatData = document.createElement("div");
    chatData.classList.add("chat");
    chat.forEach((element) => {
      const user_container = document.createElement("div");
      const user_mssg = document.createElement("p");
      user_mssg.innerText = element.msg.message;
      user_container.appendChild(user_mssg);
      if (element.from.type === "user1") {
        user_container.classList.add("user1-container");
        user_mssg.classList.add("user1-mssg");
      } else {
        user_container.classList.add("user2-container");
        user_mssg.classList.add("user2-mssg");
      }
      chatData.appendChild(user_container);
    });
    document.querySelector(".chat-box").appendChild(chatData);
  } else {
    const chatData=document.createElement("div")
    chatData.classList.add("chat")

    document.querySelector(".chat-box").appendChild(chatData);
  }
}

//Function togGo back for small screen ............................................
function goBack() {
  document.querySelector(".right").style.display = "none";
  document.querySelector(".left").style.display = "block";
  document.querySelector(".left").style.width = "100%";
}

// EventListner to autoadjust based on screen size
window.addEventListener("resize", function () {
  if (window.innerWidth <= 750) {
    document.querySelector(".left").style.display = "block";
    document.querySelector(".left").style.width = "100%";
    document.querySelector(".right").style.display = "none";
  } else if (window.innerWidth > 750) {
    document.querySelector(".left").style.width = "32%";
    document.querySelector(".left").style.display = "block";
    document.querySelector(".right").style.width = "68%";
    document.querySelector(".right").style.display = "block";
  }
});

function serachUser(event) {
  document.querySelector(".userList").innerHTML = "";
  input = event.target.value;
  if (input === "") {
    setList(usersData);
  } else {
    const newList = usersData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    if (newList.length === 0) {
      document.querySelector(".userList").innerHTML = "No Data Found";
      document.querySelector(".userList").style.fontWeight = "bolder";
    } else {
      setList(newList);
    }
  }
}

// function to change theme
function selectTheme(event) {
  let r = document.querySelector(":root");
  let color = event.target.value;
  if (color === "Change theme") {
    r.style.setProperty("--my-mssg", "#00A0AE");
  } else {
    r.style.setProperty("--my-mssg", color);
  }
}

// function to change Background image
function changeBg(event) {
  let r = document.querySelector(":root");
  let bg = event.target.value;
  switch (bg) {
    case "Change background":
      r.style.setProperty("--background-img", 'url("https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg")');
    
      break;
    case "image1":
      r.style.setProperty("--background-img", 'url("https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-cool-dark-green-new-theme-whatsapp.jpg")');
     
      break;
    case "image2":
      r.style.setProperty("--background-img", 'url("https://wallpaperaccess.com/full/1288076.jpg")');
    break;
    case "image3":
      r.style.setProperty("--background-img", 'url("https://i.pinimg.com/736x/78/1e/21/781e212cb0a891c6d8a3738c525e235d.jpg")');
    break;
  }
}
//  function for char and word count
function calc(event) {
  const str=event.value
  if(str===""){
    document.querySelector('.count-char').innerText=`Current characters:${0} and current words:${0}`
  }
  else{
    const length=str.length
  const arrlength=str.split(" ").length
  document.querySelector('.count-char').innerText=`Current characters:${length} and current words:${arrlength}`
  }
}

// function to send Message 
function sendMssg() {
  const inpMssg=document.querySelector(".inpMssg")
  if(inpMssg.value===""){
    alert("Please Enter Ssome Text")
  }
  else{
  const arr=document.querySelectorAll(".user-list")
  let index=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].className==="user-list active"){
      index=i+1
      break
    }
  }
  let name=`chat${index}` 
  const newMssg=[{
    from: {
      type: "user2",
    },
    msg: {
      message:inpMssg.value
    },
  },]
  if(JsonData[name]){
    JsonData[name]=[...JsonData[name],...newMssg]
  }
  else{
    JsonData[name]=newMssg
  }
  document.querySelector('.chat').remove()
  AddChat(JsonData[name])
  inpMssg.value=""
  calc(document.querySelector('.inpMssg'))
  } 
}