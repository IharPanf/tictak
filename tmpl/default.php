<div class = "tic_tak">
    <script>
        var heightTable = <?php echo $heightField;?>;
        var widthTable  = <?php echo $widthField;?>;
        var countVic    = <?php echo $countVic;?>;
    </script>
    <div class="option">
        <input type="button" value="New game" id="startGame">
    </div>
    <table>
            <?php for ($i = 0; $i < $heightField; $i++ ) {
                echo "<tr>";
                for($j = 0; $j < $widthField ; $j++ ) {
                    echo "<td class='cells col".$j."'></td>";
                }
                echo "</tr>";
            }?>
    </table>
</div>


