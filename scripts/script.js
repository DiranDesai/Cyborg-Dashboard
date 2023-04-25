const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', "july", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Purchases Statistics',
            data: [65, 59, 80, 81, 56, 55, 40, 77, 55, 99, 85, 74],
            fill: false,
            borderColor: '#007eff',
            tension: 0.1
          }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



const sideBarButton = document.querySelector(".sidebar-btn");
const dashBoard = document.querySelector(".dashboard");

let sideBarStatus = false;

sideBarButton.addEventListener("click", handleSideBar);

function handleSideBar() {
    if (sideBarStatus) {
        dashBoard.classList.remove("dashboard-in");
        sideBarStatus = false;
    } else {
        dashBoard.classList.add("dashboard-in");
        sideBarStatus = true;
    }
}